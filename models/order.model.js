const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  address: { type: String, required: true },
  wallet: { type: String, required: true },
  items: { type: Array, required: true },
  comments: { type: String },
  cryptoPrice: { type: Number, required: true },
  fiatPrice: { type: Number },
  paid: {type: Boolean, default: false},
  confirmed: {type: Boolean, default: false},
  transaction: {type: Schema.Types.ObjectId, ref: 'Transaction' },
  createdDate: { type: Date, default: Date.now },
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Order', schema);