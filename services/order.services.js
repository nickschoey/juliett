const Order = require('../models/order.model');


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
  console.log(res);
  ctx.status = 200;
  ctx.body = res
  return ctx;
}

module.exports.getAll = async (ctx) => {
  const orders = await Order.find({});
  ctx.status = 200;
  ctx.body = orders;
  return ctx;
}