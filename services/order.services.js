const Order = require('../models/order.model');
const transactionServices = require('./transaction.services')


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
  ctx.body = res._id;

  // function sleep (ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }

  // console.log('new order id', res._id);
  // const myInterval = setInterval( async () => {
  //   let stat = await transactionServices.verifyTransactions(res._id)
  //   console.log(`The transaction status is ${stat ? 'confirmed' : 'not yet confirmed'}`);
    
  //   if (stat === true) {
  //     clearInterval(myInterval);
  //   }
  // }, 10000);
  
  // await sleep(180000)
  // clearInterval(myInterval);
  // const status = await transactionServices.verifyTransactions(res._id);
  // if (status) {
  //   ctx.status = 200
  //   ctx.body = status;
  //   return ctx;
  // } else {
  //   ctx.status = 418
  //   return ctx;
  // }

  
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


module.exports.confirmOrder = async (ctx) => {
  const order = await Order.findByIdAndUpdate(ctx.request.body.id, { $set: { confirmed: true } });
  ctx.status = 200;
  ctx.body = order._id;
  
  return ctx;
}


module.exports.verifyOrder = async (ctx) => {

  return ctx;
}
