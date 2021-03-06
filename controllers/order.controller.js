const orderServices = require('../services/order.services')

module.exports.newOrder = async (ctx, next) => {
  await orderServices.newOrder(ctx)
  next()
}

module.exports.getAll = async (ctx, next) => {
  await orderServices.getAll(ctx)
  next()
}

module.exports.deleteOrder = async (ctx, next) => {

  ctx.body = await orderServices.deleteOrder(ctx)
  next()
}

module.exports.confirmOrder = async (ctx, next) => {
  await orderServices.confirmOrder(ctx)
  next()
}