const Order = require('../models/order.model');
const Tx = require('../models/transaction.model');

module.exports.newOrder = async (ctx) => {
  const order = ctx.request.body;
  
  let res = await Order.create({
    name: order.name,
    email: order.email,
    phone: order.phone,
    address: order.address,
    wallet: order.wallet,
    items: order.items,
    cryptoPrice: order.cryptoPrice,
    fiatPrice: order.price
  })

  ctx.status = 200;
  ctx.body = res
  return ctx;
}

module.exports.getAll = async (ctx) => {
  const orders = await Order.find({});
  ctx.status = 200;
  ctx.body = orders.reverse();
  return ctx;
}

module.exports.deleteOrder = async (ctx) => {
  await Order.deleteOne({ _id: ctx.params.id });
  ctx.status = 200;
  ctx.body = { message: 'Successfully deleted' };
  return ctx
}
module.exports.deleteOrder = async (ctx) => {
  await Order.deleteOne({ _id: ctx.params.id });
  ctx.status = 200;
  ctx.body = { message: 'Successfully deleted' };
  return ctx
}

module.exports.confirmOrder = async (ctx) => {
  const order = await Order.findByIdAndUpdate(ctx.request.body.id, { $set: { confirmed: true } });
  ctx.status = 200;
  ctx.body = order._id;
  
  return ctx;
}
