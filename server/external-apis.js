const fetch = require('cross-fetch')
const request = require('request')

const coinmarketAPIeth = 'https://api.coinmarketcap.com/v2/ticker/1027/?convert=EUR'
let blockcypherToken = '253d2ec058d24dffa4c529a9464bc4b3'
let blockcypherAPI = 'https://api.blockcypher.com/v1/eth/main/addrs/'
let testingPrivate = '41cb6afe76aca3d456d4a3aabcb468b0506f233be9d35720e238e502455cb0aa'
let testingPassword = 'testingforsolo'
let testingAddress = '0xEdE9329fb5bf044Fb580e17a9DF095B44D848eD2'
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
  .then(res => res = res.txrefs.slice(0,5).reverse())
}

const checkAllTX = () => {
  return fetch(blockcypherAPI+testingAddress)
  .then(res => res.json())
}



//   ROUTER ENDPOINTS ================

const checkLast = async (ctx, next) => {
  ctx.body = await checkLastTX()
  next()
}

const checkExchangeRate = async (ctx, next) => {
  ctx.body = await rateEURtoETH()
  next()
}

const checkAll = async (ctx, next) => {
  ctx.body = await checkAllTX()
  next()
}


exports.rateEURtoETH = rateEURtoETH
exports.checkLast = checkLast
exports.checkAll = checkAll
exports.checkLastTX = checkLastTX
exports.checkExchangeRate = checkExchangeRate
