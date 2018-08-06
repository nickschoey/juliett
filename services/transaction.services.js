const extApiServices = require('./externalApis.services')
const Transaction = require('../models/transaction.model');

// Call the external API

module.exports.updateTransactions = async () => {

  // Lookup my history of transactions
  const rawTransactions = await extApiServices.getTransactions()

  // Compare with the registered transactions
  const registeredTransactions = await Transaction.find({})
  
  // If there's more than 0 transactions, create an index of transactions
  if (registeredTransactions.length > 0) {
    const registeredIndex = registeredTransactions.reduce(
      (acc, el) => { acc[el.hash] = true;
        return acc; 
    }, {});
    //
    for (const transaction of rawTransactions.result) {
      if (registeredIndex.hasOwnProperty(transaction.hash)) {
        console.log(`transaction ${transaction.hash} already exisits on database`);
      } else {
        Transaction.create({
          timeStamp: transaction.timeStamp,
          hash: transaction.hash,
          from: transaction.from,
          value: transaction.value,
        }).then(res => console.log(`${transaction.hash} has been added to the database`))
      }
    }

  } else {
    for (const tx of rawTransactions.result) {
      Transaction.create({
        timeStamp: tx.timeStamp,
        hash: tx.hash,
        from: tx.from,
        value: tx.value,
      }).then(res => console.log(`${tx.hash} has been added to the database`))
    }
  }
};

// module.exports.getAllTransactions = async () => {
//   const allTransactions = await Transaction.find({})

//   return allTra
// }
// Add new transactions

// return transactions