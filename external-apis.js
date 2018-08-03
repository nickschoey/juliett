const fetch = require('cross-fetch')
const request = require('request')

const coinmarketAPIeth = 'https://api.coinmarketcap.com/v2/ticker/1027/?convert=EUR'
let blockcypherToken = '253d2ec058d24dffa4c529a9464bc4b3'
let blockcypherAPI = 'https://api.blockcypher.com/v1/eth/main/addrs/'
let testingPassword = 'testingforsolo'
// let testingAddress = '0xEdE9329fb5bf044Fb580e17a9DF095B44D848eD2' //Old Doruk's adress
let testingAddress = '0xe182CcFA27E955C94E7D649aD1Cb32BA90295591' //My new and shiny Ethereum wallet
let webhookUrl = 'https://217e20e5.ngrok.io'
let w = 1000000000000000000;



const rateEURtoETH = () => {
  return fetch(coinmarketAPIeth)
  .then(res => res.json())
  .then(res => res = res.data.quotes["EUR"].price)
  .then(res => res = Math.ceil(Math.pow(10, 18)/res, 1)) // return exchange rate in WEIs, round up for gas cost
}


const checkLastTX = () => {
  return fetch(blockcypherAPI+testingAddress)
  .then(res => res.json())
}

const checkAllTX = () => {
   return fetch(blockcypherAPI+testingAddress)
    .then(res => res.json())

}



//   ROUTER ENDPOINTS ================
//Looking for the last transaction, this is the method used to verify the payment
const checkLast = async (ctx, next) => {
  ctx.body = await checkLastTX()
  next()
}

const checkExchangeRate = async (ctx, next) => {
  ctx.body = await rateEURtoETH()
  next()
}

//Gets all the info from a given account
const checkAll = async (ctx, next) => {
  ctx.body = await checkAllTX()
  
  next()
}


exports.rateEURtoETH = rateEURtoETH
exports.checkLast = checkLast
exports.checkAll = checkAll
exports.checkLastTX = checkLastTX
exports.checkExchangeRate = checkExchangeRate
