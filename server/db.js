const db = require('mongoose');
const Item = require('./models/model-item')
const Receipt = require('./models/model-receipt')

//   DATABASE ENDPOINTS =======================================================

//   ITEM ENDPOINTS ================

function addItem(item) {
  Item.create(item)
    .then(res => console.log("successfully added item"))
    .catch(err => console.error(err))
}


const deleteItem = async (item) => {
  let data = await Item.findOneAndDelete({name: item})
  return data
}

const viewItem = async (item) => {
  let data = await Item.findOne({name: item})
  return data
}

const viewItems = async () => {
  let data = await Item.find()
  return data
}

/*

const editItem = async (item) => {

}

*/

//   ACCOUNTING ENDPOINTS ================

function addReceipt(receipt) {
  console.log(receipt)
  Receipt.create(receipt)
    .then(res => console.log("successfully added receipt"))
    .catch(err => console.error(err))
}

function viewReceipt(receipt) {

}

function viewAccounts() {

}

function deleteReceipt(receipt) {
  model.findByIdAndDelete(receipt.id)
    // .then(res => res.send(200))
    .then(console.log(`Receipt deleted successfully`))
    .catch((err) => console.error(err))
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
exports.viewAccounts = viewAccounts
exports.deleteReceipt = deleteReceipt
