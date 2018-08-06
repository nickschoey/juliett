const fetch = require('cross-fetch')
const coinmarketAPIeth = 'https://api.coinmarketcap.com/v2/ticker/1027/?convert=EUR'
const blockcypherToken = '253d2ec058d24dffa4c529a9464bc4b3'
const blockcypherAPI = 'https://api.blockcypher.com/v1/eth/main/addrs/'
const testingPassword = 'testingforsolo'
// let testingAddress = '0xEdE9329fb5bf044Fb580e17a9DF095B44D848eD2' //Old Doruk's adress
const testingAddress = '0xe182CcFA27E955C94E7D649aD1Cb32BA90295591' //My new and shiny Ethereum wallet
const webhookUrl = 'https://217e20e5.ngrok.io'
const w = 1000000000000000000;
const etherScanAPIKey = '4UBFZT7AHFZ67HFIJKEQC7XC1HAYR8EDPG'
const etherScanAPI = 'http://api.etherscan.io/api?module=account&action=txlist&address='






module.exports.checkLastTX = () => {
  return fetch(`http://api.etherscan.io/api?module=account&action=txlist&address=${testingAddress}&startblock=0&endblock=99999999&sort=asc&apikey=${etherScanAPIKey}`)
    .then(res => res.json())
  }
  
  module.exports.checkAllTX = () => {
    return fetch(`http://api.etherscan.io/api?module=account&action=txlist&address=0xe182CcFA27E955C94E7D649aD1Cb32BA90295591&startblock=0&endblock=99999999&sort=asc&apikey=4UBFZT7AHFZ67HFIJKEQC7XC1HAYR8EDPG`)
    .then(res => res.json())
    

}



//   ROUTER ENDPOINTS ================
//Looking for the last transaction, this is the method used to verify the payment
module.exports.checkLast = async (ctx, next) => {
  ctx.body = await checkLastTX()
  next()
}



//Gets all the info from a given account
module.exports.checkAll = async (ctx, next) => {
  ctx.body = await checkAllTX()
  
  next()
}


