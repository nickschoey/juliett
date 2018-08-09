const mongoose = require('mongoose')

const Item = new mongoose.Schema({
  name: String,
  description: String,
  priceFiat: {type: Number, min: 0},
  imageURL: String,
  category: String,
  createdDate: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Item', Item);
