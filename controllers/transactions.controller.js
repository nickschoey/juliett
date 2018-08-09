const transactionServices = require('../services/transaction.services')

module.exports.updateTransactions = async (ctx, next) => {
  ctx.body = await transactionServices.updateTransactions()
  next()
}

module.exports.verifyTransactions = async (ctx, next) => {
  await transactionServices.verifyTransactions(ctx)
  next()
}