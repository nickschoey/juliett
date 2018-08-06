const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  timeStamp: { type: Number },
  hash: { type: String, required: true },
  from: { type: String, required: true },
  value: { type: Number, required: true },
  confirmations: { type: Number}
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Transaction', schema);