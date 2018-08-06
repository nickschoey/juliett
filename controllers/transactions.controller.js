const transactionServices = require('../services/transaction.services')

module.exports.updateTransactions = async (ctx, next) => {
  ctx.body = await transactionServices.updateTransactions()
  next()
}