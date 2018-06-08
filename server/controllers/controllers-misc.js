

const newTX = (ctx, next) => {
  ctx.body = ctx.request.body
  console.log(ctx.body);
  next()
}

exports.newTX = newTX
