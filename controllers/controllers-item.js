const db = require ('../db')

const viewItems = async (ctx, next) => {
  ctx.body = await db.viewItems()
  next()
}

const viewItem = async (ctx, next) => {
  ctx.body = await db.viewItem(ctx.params.name)
  next()
}

const addItem = async (ctx, next) => {
  ctx.body = ctx.request.body
  await db.addItem(ctx.body)
  next()
}

const deleteItem = async (ctx, next) => {
  ctx.body = await db.deleteItem(ctx.params.name)
  next()
}

/*

const editItem = async (ctx, next) => {
  ctx.body = ctx.request.body
  db.editItem(ctx.body)
  res.send('edited to your liking')

}
*/

//     EXPORTS =================================================================

exports.addItem = addItem
exports.deleteItem = deleteItem
exports.viewItems = viewItems
exports.viewItem = viewItem
// exports.editItem = editItem
