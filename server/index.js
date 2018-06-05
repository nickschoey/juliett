const Koa = require ('koa')
const cors = require ('koa-cors')
const app = module.exports = new Koa()
const bodyparser = require('koa-bodyparser')
const router = require ('./routes.js')
const db = require('./db.js')



app
  .listen(3000, () => console.log('App listening on port 3000!'))
  .on('error', (err, ctx) => {
  console.error('server error', err, ctx)
  })
