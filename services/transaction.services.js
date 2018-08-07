const extApiServices = require('./externalApis.services')
const Transaction = require('../models/transaction.model');
const Order = require('../models/order.model')
// Call the external API

module.exports.updateTransactions = async () => {

  // Lookup my history of transactions
  const rawTransactions = await extApiServices.getTransactions()

  // Compare with the registered transactions
  const registeredTransactions = await Transaction.find({})

  // If there's more than 0 transactions, create an index of transactions
  if (registeredTransactions.length > 0) {
    const registeredIndex = registeredTransactions.reduce(
      (acc, el) => {
      acc[el.hash] = true;
        return acc;
      }, {});
    //
    for (const transaction of rawTransactions.result) {
      if (!registeredIndex.hasOwnProperty(transaction.hash)) {
        Transaction.create({
          timeStamp: transaction.timeStamp,
          hash: transaction.hash,
          from: transaction.from,
          value: transaction.value / 1000000000000000000,
        }).then(res => console.log(`${transaction.hash} has been added to the database`))
      }
    }

  } else {
    for (const tx of rawTransactions.result) {
      Transaction.create({
        timeStamp: tx.timeStamp,
        hash: tx.hash,
        from: tx.from,
        value: tx.value / 1000000000000000000,
      }).then(res => console.log(`${tx.hash} has been added to the database`))
    }
  }


  const returnTransactions = await Transaction.find({ validated: false });
  const pendingOrders = await Order.find({ paid: false });


  for (const order of pendingOrders) {
    for (const tx of returnTransactions) {
      if (order.wallet.toLowerCase() === tx.from.toLowerCase() && order.cryptoPrice === tx.value) {
        console.log(`order ${order._id} matched with ${tx.hash}`)
        await Order.findByIdAndUpdate(order._id, { $set: { paid: true, transaction: tx._id } });
        await Transaction.findByIdAndUpdate(tx._id, { $set: { validated: true } })
        break
      }
    }
  }
  const matchedOrders = await Order.find( {paid: true, confirmed: false})
  const unmatchedOrders = await Order.find( {paid: false, confirmed: false})
  const unmatchedTxs = await Transaction.find( {validated: false})
  


  return {matchedOrders, unmatchedOrders, unmatchedTxs};
};

// module.exports.getAllTransactions = async () => {
//   const allTransactions = await Transaction.find({})

//   return allTra
// }
// Add new transactions

// return transactions