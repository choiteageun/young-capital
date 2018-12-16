const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')
const session = require('koa-session')
const logger = require('./lib/logger')
const stringify = require('json-stringify-safe')

const c2k = require('koa-connect')
const requestIp = require('request-ip');

const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  const http = require('http').createServer(app.callback())
  const io = require('socket.io')(http)

  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  //세션 등록
  app.keys = ['chance']
  const sessionConfig = {
    maxAge: 3600 * 24 * 1000 //1일
  }

  app.use(session(sessionConfig, app))

  app.use(bodyParser())
  

  app.use(async (ctx, next) => {
    ctx.logger = logger
    await next()
  })
  
  //로그 미들웨어 생성
  // const logger = winston.createLogger({
  //   //로그를 기록할 매체 설정.
  //   transports:[
  //     //콘솔에 찍는다.
  //     new winston.transports.Console()
  //   ]
  // })

  // logger.log("안녕하세요")
  // router.get("/number", ctx =>{
  //   ctx.body = Math.floor(Math.random() *100)
  // })

  //AJAX 요청 사능하다
  // app.use(cors({
  //   origin: "http://www.numberoneloan.com"
  // }))

  //IP : 이용가능하게 등록
  app.use(c2k(requestIp.mw()))

  const api = require('./api/index')
  const router = new Router()

  router.use('/api', api.routes())

  //서버에 API 붙이기
  app.use(router.routes())
  app.use(router.allowedMethods())

  app.use(ctx => {
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset
    console.log(ctx.req)
    console.log(ctx.req.clientIp)

    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      ctx.req.ctx = ctx
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })

  app.on('error', (err, ctx) => {
    const { method, url, header } = ctx.request
    console.log(err.message)
    console.log(ctx)

    //에러 메시지 입력 후
    //요청 객체를 분석하여 로그를 남긴다.
    const message = `message: ${err},  url: ${url}, method: ${method}, referer: ${
      header.referer
    }`
    ctx.logger.error(message)
  })

  // io.on('connection', socket => {
  //   console.log('유저가 접속함!')
  //   // console.log(io.sockets)

  //   socket.on('chat', chat => {
  //     io.emit('chat', chat)
  //   })

  //   socket.on("disconnect", reason=>{
  //     console.log("유저 접속 해제")
  //     console.log(reason)

  //   })
  // })

  http.listen(port)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
