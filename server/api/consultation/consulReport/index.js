const Router = require("koa-router")

const models = require("../../../models/index");
const Consultation = require("../../../models/Consultation");
const User = require("../../../models/User");

const router = new Router()
router.get('/',async ctx=>{
  
  const res = await models.Notememo.findAll({
  })
  ctx.body= res;
})

router.post('/',async ctx=>{
  const res = await models.Notememo.findAll({
  })
  ctx.body= res;
})
router.post("/:id", async ctx => {
  const { data } = ctx.request.body;
  const { id } = ctx.params
  // const data = ctx.request.body.data = const { data } = ctx.request.body
  //const data = ctx.request.body.data = const { data , as , kk } = ctx.request.body
  console.log(data)
  const result = await models.Notememo.create(data);
  ctx.body = result;
});

module.exports = router