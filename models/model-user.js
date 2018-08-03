const mongoose = require('mongoose')

const User = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  publicWallet: String,
  address: String,
}, {timestamps: true})