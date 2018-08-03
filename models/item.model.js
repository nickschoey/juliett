const mongoose = require('mongoose')

const Item = new mongoose.Schema({
  name: String,
  priceFiat: 0,
  priceCryptocurrency: String,
  exchangeRate: String,
  _priceCryptoNumber: Number,
  _priceFiat: Number,
  imageURL: String,
})

module.exports = mongoose.model('Item', Item);
