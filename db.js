const db = require('mongoose');
const Item = require('./models/item.model')
const Receipt = require('./models/receipt.model')
const externalapis = require('./external-apis')
const config = require('./config.json');

//   DATABASE ENDPOINTS =======================================================

//   ITEM ENDPOINTS ================

module.exports.addItem = (item) => {
  Item.create(item)
    .then(res => console.log("successfully added item"))
    .catch(err => console.error(err))
}




module.exports.viewItem = async (item) => {
  let data = await Item.find({name: item})
  let current_rate = await externalapis.rateEURtoETH(); // get current rate before viewing item
  current_rate = current_rate / Math.pow(10,18) // should make this dynamic);
  data.forEach(el => {
    el._priceCryptoNumber = (el.priceFiat* current_rate)
    el.priceCryptocurrency = "Ξ " + (el.priceFiat * current_rate).toFixed(7).toString();
    el.exchangeRate = current_rate.toString();
    el.priceFiat = "€ " + el.priceFiat.toString();
  });
  return data
}

/*

module.exports.editItem = async (item) => {

}

*/

//   ACCOUNTING ENDPOINTS ================

module.exports.addReceipt = async (receipt) => {
  let data = await externalapis.rateEURtoETH();
  receipt.exchangeRate = data
  receipt.date = new Date()
  Receipt.create(receipt)
    .then(res => console.log("successfully receipted item"))
    .catch(err => console.error(err))
}


module.exports.deleteReceipt = async (receipt) => {
  let data = await Receipt.findOneAndDelete({item: receipt})
  if (data) {console.log("successfully deleted receipt")}
  return data

}

module.exports.viewReceipt = async (receipt) => {
  let data = await Receipt.findOne({item: receipt})
  return data
}

module.exports.viewReceipts = async () => {
  let data = await Receipt.find()
  return data
}


//   DATABASE CONNECTION =======================================================

db.connect(config.connectionString)
  .then(() => { console.log('Connection to database is successful!')})
  .catch(err => console.error(err));


