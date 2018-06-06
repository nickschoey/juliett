'use strict';

const item = require ('./controllers/controllers-item.js');
const accounting = require ('./controllers/controllers-accounting.js');
const Router = require('koa-router')
const router = new Router();
const fs = require('fs');



router
  //-------------items
  .get('/view/:name', item.viewItem)
  .get('/view-all', item.viewItems)
  .post('/add-item', item.addItem)
  .delete('/delete/:name', item.deleteItem)
  .put('/topics/:name'), controller.editItem)
  
  // //-------------accounting
  // .get('/view-receipt', accounting.viewReceipt)
  // .get('/view-accounts', accounting.viewAccounts)
  // .post('/add-receipt', accounting.addReceipt)
  // .delete('/delete-receipt', accounting.deleteReceipt)


module.exports = router
