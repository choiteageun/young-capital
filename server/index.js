const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const cors = require("@koa/cors")
const session = require('koa-session')

const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  const http = require('http').createServer(app.callback())
  // const io = require('socket.io')(http)

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
  // router.get("/number", ctx =>{
  //   ctx.body = Math.floor(Math.random() *100)
  // })

  //AJAX 요청 사능하다
  // app.use(cors({
  //   origin: "http://www.numberoneloan.com"
  // }))

  const api = require('./api/index')
  const router = new Router()

  router.use('/api', api.routes())

  //서버에 API 붙이기
  app.use(router.routes())
  app.use(router.allowedMethods())

  app.use(ctx => {
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset

    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      ctx.req.ctx= ctx
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })
  // io.on('connection', socket => {
  //   console.log('유저가 접속함!')

  //   socket.on('chat', chat => {
  //     io.emit('chat', chat)
  //   })
  // })

  http.listen(port)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
