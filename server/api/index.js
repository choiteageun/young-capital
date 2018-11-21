const Router = require("koa-router")

const models = require("../models/index");
const Consultation = require("../models/Consultation");
const User = require("../models/User");

const router = new Router();
const auth = require("./auth")
const consultation = require("./consultation")
const user = require("./user")

router.use( (ctx, next) =>{
  //해당 도메인만 허용하겠다
  ctx.res.setHeader("Access-Control-Allow-Origin", "*");

  //AJAX 요청만 허용하겠다.
  ctx.res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  return next()
})

router.use("/auth", auth.routes())
router.use("/consultation", consultation.routes())
router.use("/user", user.routes())

router.get("/list", ctx=>{
  ctx.body = ["사과", "바나나", "오렌지",1,3]
})


module.exports = router
