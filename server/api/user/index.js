const Router = require("koa-router")

const models = require("../../models/index");
const User = require("../../models/User");

const router = new Router()

router.get("/", async ctx =>{
  const result = await models.User.findAll({
    order:[
      ["id", "desc"]
    ]
  })
  ctx.body = result;
})

router.post("/createStaff", async ctx => {
  const { data } = ctx.request.body;

  const result = await models.User.create(data);

  ctx.body = result;
});

router.post("/:id", async ctx => {
  const { data } = ctx.request.body;
  const { id } = ctx.params
  const result = await models.User.update(data,{ where: {id: id} });

  ctx.body = result;
});

module.exports = router