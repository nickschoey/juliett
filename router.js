'use strict';

const item = require ('./controllers/controllers-item.js');
const accounting = require ('./controllers/controllers-accounting.js');
const Router = require('koa-router')
const router = new Router();
const externalapis = require('./external-apis')



router
  //-------------items
  .get('/view/:name', item.viewItem)
  .get('/view-all', item.viewItems)
  .post('/add-item', item.addItem)
  .delete('/delete/:name', item.deleteItem)
  //.put('/topics/:name'), controller.editItem

  //-------------accounting
  .get('/view-receipt/:item', accounting.viewReceipt)
  .get('/view-receipts', accounting.viewReceipts)
  .post('/add-receipt', accounting.addReceipt)
  .delete('/delete-receipt/:item', accounting.deleteReceipt)

  //-------------purchases
  // .post('/purchase/:item', item.addItem)
  .get('/checklast', externalapis.checkLast)
  .get('/check-rate', externalapis.checkExchangeRate)
  .get('/check-all', externalapis.checkAll)


module.exports = router
