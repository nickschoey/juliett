const mongoose = require('mongoose')

const Item = new mongoose.Schema({
  name: String,
  cost: Number,
  ingredients: Array,
})

module.exports = mongoose.model('Item', Item);
