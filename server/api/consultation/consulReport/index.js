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
router.get('/:id',async ctx=>{
  const { id } = ctx.params
  const memos = await models.Notememo.findAll({
    where:{
      consulId:id
    }
  })
  ctx.body= memos;
})

router.post('/',async ctx=>{
  const { data } = ctx.request.body;

  const result = await models.Notememo.create(data);
  ctx.body = result;
})
router.post("/:id", async ctx => {
  const { data } = ctx.request.body;
  const { id } = ctx.params
  // const data = ctx.request.body.data = const { data } = ctx.request.body
  //const data = ctx.request.body.data = const { data , as , kk } = ctx.request.body
  
  const result = await models.Notememo.create(data);
  ctx.body = result;
});

module.exports = router