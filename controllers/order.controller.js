const orderServices = require('../services/order.services')

module.exports.newOrder = async (ctx, next) => {
  ctx.body = await orderServices.newOrder(ctx)
  next()
}

module.exports.getAll = async (ctx, next) => {
  await orderServices.getAll(ctx)
  next()
}

module.exports.deleteOrder = async (ctx, next) => {
  console.log(ctx.params.id);

  ctx.body = await orderServices.deleteOrder(ctx)
  next()
}