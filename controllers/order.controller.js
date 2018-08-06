const orderServices = require('../services/order.services')

module.exports.newOrder = async (ctx, next) => {
  ctx.body = await orderServices.newOrder(ctx)
  next()
}

module.exports.getAll = async (ctx, next) => {
  await orderServices.getAll(ctx)
  next()
}