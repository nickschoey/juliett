const db = require('mongoose');
const Item = require('./models/model-item')
const Receipt = require('./models/model-receipt')
const externalapis = require('./external-apis')

//   DATABASE ENDPOINTS =======================================================

//   ITEM ENDPOINTS ================

const addItem = (item) => {
  Item.create(item)
    .then(res => console.log("successfully added item"))
    .catch(err => console.error(err))
}


const deleteItem = async (item) => {
  let data = await  Item.findOneAndDelete({name: item})
    if (data) {console.log("successfully deleted item")}
    return data
}

const viewItem = async (item) => {
  let data = await Item.find({name: item})
  let current_rate = await externalapis.rateEURtoETH(); // get current rate before viewing item
  current_rate = current_rate / Math.pow(10,18) // should make this dynamic);
  data.forEach(el => {
    el.priceCryptocurrency = "Ξ " + (el.priceFiat * current_rate).toString();
    el.exchangeRate = current_rate.toString();
    el.priceFiat = "€ " + el.priceFiat.toString();
  });
  return data
}

const viewItems = async () => {
  let data = await Item.find()
  let current_rate = await externalapis.rateEURtoETH(); // get current rate before viewing item
  current_rate = current_rate / Math.pow(10,18) // should make this dynamic);
  data.forEach(el => {
    el.priceCryptocurrency = "Ξ " + (el.priceFiat * current_rate).toString();
    el.exchangeRate = current_rate.toString();
    el.priceFiat = "€ " + el.priceFiat.toString();
  });
  return data
}

/*

const editItem = async (item) => {

}

*/

//   ACCOUNTING ENDPOINTS ================

const addReceipt = async (receipt) => {
  let data = await externalapis.rateEURtoETH();
  console.log(data);
  receipt.exchangeRate = data
  receipt.priceCryptocurrency = data * receipt.priceFiat
  Receipt.create(receipt)
    .then(res => console.log("successfully receipted item"))
    .catch(err => console.error(err))
}


const deleteReceipt = async (receipt) => {
  let data = await Receipt.findOneAndDelete({item: receipt})
  if (data) {console.log("successfully deleted receipt")}
  return data

}

const viewReceipt = async (receipt) => {
  let data = await Receipt.findOne({item: receipt})
  return data
}

const viewReceipts = async () => {
  let data = await Receipt.find()
  return data
}


//   DATABASE CONNECTION =======================================================

db.connect('mongodb://localhost/Juliett')
  .then(() => { console.log('Connection Successful!')})
  .catch(err => console.error(err));



//     EXPORTS =================================================================

exports.db = db
exports.addItem = addItem
exports.deleteItem = deleteItem
//exports.editItem = editItem
exports.viewItems = viewItems
exports.viewItem = viewItem
exports.addReceipt = addReceipt
exports.viewReceipt = viewReceipt
exports.viewReceipts = viewReceipts
exports.deleteReceipt = deleteReceipt
