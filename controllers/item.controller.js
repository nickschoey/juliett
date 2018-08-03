const db = require ('../db')
const itemServices = require('../services/item.services')

module.exports.getAll = async (ctx, next) => {
  ctx.body = await itemServices.getAll()
  next()
}

module.exports.viewItem = async (ctx, next) => {
  ctx.body = await db.viewItem(ctx.params.name)
  next()
}

module.exports.addItem = async (ctx, next) => {
  ctx.body = ctx.request.body
  await db.addItem(ctx.body)
  next()
}

module.exports.deleteItem = async (ctx, next) => {
  ctx.body = await db.deleteItem(ctx.params.name)
  next()
}

/*

module.exports.editItem = async (ctx, next) => {
  ctx.body = ctx.request.body
  db.editItem(ctx.body)
  res.send('edited to your liking')

}
*/

