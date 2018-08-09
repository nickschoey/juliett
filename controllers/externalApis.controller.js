const externalApisServices = require('../services/externalApis.services')

module.exports.getQuote = async (ctx, next) => {
  
  ctx.body = await externalApisServices.getQuote()
  next()
}