const db = require ('../db')
const outsideapis = ('../external-apis')

const viewReceipts = async (ctx, next) => {
  ctx.body = await db.viewReceipts()
  next()
}

const viewReceipt = async (ctx, next) => {
  ctx.body = await db.viewReceipt(ctx.params.item)
  next()
}

const addReceipt = async (ctx, next) => {
  ctx.body = ctx.request.body
  await db.addReceipt(ctx.body)
  next()
}

const deleteReceipt = async (ctx, next) => {
  ctx.body = await db.deleteReceipt(ctx.params.item)
  next()
}

//     EXPORTS =================================================================

exports.addReceipt = addReceipt
exports.viewReceipts = viewReceipts
exports.viewReceipt = viewReceipt
exports.deleteReceipt = deleteReceipt
