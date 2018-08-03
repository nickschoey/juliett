const jwt = require('koa-jwt');
const config = require('../config.json');
const signToken = require('jsonwebtoken')
module.exports = function (ctx) {
  
  if (ctx.request.body.password === 'password') {
    ctx.status = 200;
    ctx.body = {
      token: signToken.sign({ role: 'admin' }, config.secret),
      message: "Successfully logged in!"
    };
  } else {
    ctx.status = ctx.status = 401;
    ctx.body = {
      message: "Authentication failed"
    };
  }
  return ctx;
}
