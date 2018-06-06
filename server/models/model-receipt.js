const mongoose = require('mongoose')

const Receipt = new mongoose.Schema({
  item: String,
  fiatUsed: String,
  cryptocurrencyUsed: String,
  priceFiat: Number,
  priceCryptocurrency: Number,
  exchangeRate: Number,
  TimeStamp: Date,
  block: Number,
  hash: String
})



module.exports = mongoose.model('Receipt', Receipt);
