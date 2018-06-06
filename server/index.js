const Koa = require ('koa')
const cors = require ('koa-cors')
const app = new Koa()
const bodyparser = require('koa-bodyparser')
const router = require ('./router.js')
const db = require('./db.js')
const port = 3000;


app
  .use(bodyparser())
  .use(router.routes())
  .use(router.allowedMethods())

  .listen(port, function(){
    console.log(`Server running on ------- LOCALHOST:${port}`)
  });
