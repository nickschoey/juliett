const userServices = require('../services/user.services');

module.exports.create = async (ctx, next) => {
  await userServices.create(ctx)
  next()
}

module.exports.authenticate = async (ctx, next) => {
  await userServices.authenticate(ctx)
  next()

}

