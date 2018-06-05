const db = require('mongoose');
const item = require('./models/model-item')
const receipt = require('./models/model-receipt')

//   DATABASE ENDPOINTS =======================================================

//   ITEM ENDPOINTS ================

function addItem(item) {

}

function editItem(item) {

}

function deleteItem(item) {

}

function viewItem(item) {

}

function viewItems() {

}

//   ACCOUNTING ENDPOINTS ================

function addReceipt(receipt) {

}

function viewReceipt(receipt) {

}

function viewAccounts() {

}


//   DATABASE CONNECTION =======================================================

db.connect('mongodb://localhost/3001')
  .then(() => { console.log('Connection Successful!')})
  .catch(err => console.error(err));



//     EXPORTS =================================================================

exports.db = db
exports.addItem = addItem
exports.deleteItem = deleteItem
exports.editItem = editItem
exports.viewItems = viewItems
exports.viewItem = viewItem
exports.addReceipt = addReceipt
exports.viewReceipt = viewReceipt
exports.viewAccounts = viewAccounts
