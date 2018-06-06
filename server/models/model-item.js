const mongoose = require('mongoose')

const Item = new mongoose.Schema({
  name: String,
  price: Number,
  ingredients: [String],
})

module.exports = mongoose.model('Item', Item);
