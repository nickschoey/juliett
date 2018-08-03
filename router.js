'use strict';

const item = require('./controllers/item.controller.js');
const accounting = require('./controllers/accounting.controller.js');
const Router = require('koa-router')
const router = new Router();
const externalapis = require('./external-apis')
const jwt = require('./middlewares/jwt')
const userController = require('./controllers/user.controller');

router
  //----------users
  .post('/users/authenticate', userController.authenticate)
  .post('/users/register', jwt, userController.create)
  .get('/users', jwt, userController.getAll)
  .delete('/users/:id', jwt, userController.delete)

  //-------------items
  .get('/view/:name', item.viewItem)
  .get('/view-all', jwt, item.viewItems)
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
