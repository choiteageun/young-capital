const Router = require("koa-router")

const router = new Router();
const models = require("../../models/index");
const ip = require('ip')

router.post("/login", async ctx => {
  const {name, password } = ctx.request.body;
  // const password = ctx.request.body.password전개연산자

  const user = await models.User.findOne({where: {name:name}})
  if(!user){
    tx.status = 400;
    ctx.body = "유저 없음";
    return;
  }
  if(user.password === password){
    ctx.logger.info(`${user.name}님 접속, ip: ${ctx.ip}`)
    ctx.session.logged = true
    ctx.session.id = user.id
    ctx.session.name = user.name
    ctx.session.ip = ip.address()
    ctx.status = 200
    ctx.body = ctx.session
  }else{
    ctx.status = 401;
    ctx.body = "로그인 실패";
  }
})

router.get("/check", ctx => {
  if (ctx.session.logged) {
    ctx.body = "LOGGED";
  } else {
    ctx.status = 401;
    ctx.body = "비회원";
  }
});
router.get("/logout", ctx => {
  ctx.session = null;
  ctx.body = "LOGOUT";
});

module.exports = router
