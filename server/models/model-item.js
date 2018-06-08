const mongoose = require('mongoose')

const Item = new mongoose.Schema({
  name: String,
  priceFiat: 0,
  ingredients: [String],
  priceCryptocurrency: String,
  exchangeRate: String
})

module.exports = mongoose.model('Item', Item);
