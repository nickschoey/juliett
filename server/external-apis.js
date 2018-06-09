const fetch = require('cross-fetch')
const request = require('request')

const coinmarketAPIeth = 'https://api.coinmarketcap.com/v2/ticker/1027/?convert=EUR'
let blockcypherToken = '253d2ec058d24dffa4c529a9464bc4b3'
let blockcypherAPI = 'https://api.blockcypher.com/v1/eth/main/addrs/'
let testingPassword = 'testingforsolo'
let testingAddress = '0xEdE9329fb5bf044Fb580e17a9DF095B44D848eD2'
let webhookUrl = 'https://217e20e5.ngrok.io'
let blockcypherHook = 'https://api.blockcypher.com/v1/eth/main/hooks?token='
let coinbaseAddress = '0x8A12eC4EB484cdBF9A98011D68029b8AEF615162'


const rateEURtoETH = () => {
  return fetch(coinmarketAPIeth)
  .then(res => res.json())
  .then(res => res = res.data.quotes["EUR"].price)
  .then(res => res = Math.ceil(Math.pow(10, 18)/res, 1)) // return exchange rate in WEIs, round up for gas cost
}



const event = {
  "event": "tx-confirmation",
  "address": testingAddress,
  "url": webhookUrl
}

const webhook = () => {
  return fetch(blockcypherHook+blockcypherToken, {
    method: 'POST',
    body: JSON.stringify(event),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
}

const getter = () => {
  return fetch('https://api.blockcypher.com/v1/eth/main/hooks/2b1c34e9-ddf3-4cf3-9b0f-bdf156826fbc?token='+blockcypherToken)
  .then(res => res.json())
  .then(res => console.log(res))
}

const deleter = () => {
  return fetch('https://api.blockcypher.com/v1/eth/main/hooks/d41bffb0-740f-489b-bb59-e37ca674ad11?token='+blockcypherToken, {
    method: 'DELETE'
  })
  .then(res => console.log(res.status))
}

// webhook()
getter()
// deleter()




exports.rateEURtoETH = rateEURtoETH
