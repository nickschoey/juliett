const Koa = require ('koa')
const cors = require ('koa-cors')
const app = new Koa()
const bodyparser = require('koa-bodyparser')
const router = require ('./router.js')
const port = 3000;
const logger = require('koa-logger')

app
  .use(logger())
  .use(bodyparser())
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods())

  .listen(port, function(){
    console.log(`Server running on http://localhost:${port}/`)
  });
