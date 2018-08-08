const externalapis = require('../external-apis');
const Item = require('../models/item.model');

module.exports.getAll = async () => {
  let data = await Item.find()
  // let current_rate = await externalapis.rateEURtoETH(); // get current rate before viewing item
  // let current_rate_played = current_rate / Math.pow(10, 18) // should make  this dynamic);
  // data.forEach(el => {
  //   el._priceCryptoNumber = (el.priceFiat * current_rate)
  //   el.priceCryptocurrency = "Ξ " + (el.priceFiat * current_rate_played).toFixed(7).toString();
  //   el.exchangeRate = current_rate_played.toString();
  //   el.priceFiat = "€ " + el.priceFiat.toString();
  // });
  console.log(data);
  
  return data
}

module.exports.addItem = async (item) => {
  let res = await Item.create(item)
  return res;  
}


module.exports.deleteItem = async (ctx) => {
  await Item.deleteOne({ _id: ctx.params.id });
  ctx.status = 200;
  ctx.body = { message: 'Successfully deleted' };
  return ctx
}