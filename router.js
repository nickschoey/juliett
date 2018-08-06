'use strict';
const orderController = require('./controllers/order.controller');
const itemController = require('./controllers/item.controller.js');
const userController = require('./controllers/user.controller');
const externalApisController = require('./controllers/externalApis.controller');
const accounting = require('./controllers/accounting.controller.js');
const Router = require('koa-router')
const router = new Router();
const jwt = require('./middlewares/jwt')
const transactionController = require('./controllers/transactions.controller')


router
  //----------users
  .post('/users/authenticate', userController.authenticate)
  .post('/users/register', userController.create)
  .get('/users', jwt, userController.getAll)
  .delete('/users/:id', jwt, userController.delete)

  //-------------items
  .get('/items', itemController.getAll)
  .delete('/items/:id', itemController.deleteItem)
  .post('/items', itemController.addItem)

  //----------------External APIS
  .get('/quote', externalApisController.getQuote)

  //-------------------Order
  .post('/order', orderController.newOrder)
  .get('/order', orderController.getAll)
  .delete('/order/:id', orderController.deleteOrder)

  
  //-------------Transactions
  .get('/transactions', transactionController.updateTransactions)
  
  // .get('/view-receipt/:item', accounting.viewReceipt)
  // .get('/view-receipts', accounting.viewReceipts)
  // .post('/add-receipt', accounting.addReceipt)
  // .delete('/delete-receipt/:item', accounting.deleteReceipt)
  //-------------purchases
  // .post('/purchase/:item', item.addItem)
  // .get('/checklast', externalapis.checkLast)
  // .get('/check-rate', externalapis.checkExchangeRate)
  // .get('/check-all', externalapis.checkAll)


module.exports = router
