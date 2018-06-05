const mongoose = require('mongoose')

const Receipt = new mongoose.Schema({
  item: Object,
  fiatUsed: String,
  cryptocurrencyUsed: String,
  priceFiat: Number,
  priceCryptocurrency: Number,
  exchangeRate: Number,
  TimeStamp: Date,
  block: String,
})



module.exports = mongoose.model('Receipt', Receipt);
