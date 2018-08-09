const coinmarketAPIeth = 'https://api.coinmarketcap.com/v2/ticker/1027/?convert=EUR'
const fetch = require('cross-fetch')

module.exports.getQuote = () => {
  return fetch(coinmarketAPIeth)
    .then(res => res.json())
    .then(data => data.data.quotes.EUR.price)

}

module.exports.getTransactions = () => {
  return fetch(`http://api.etherscan.io/api?module=account&action=txlist&address=0xe182CcFA27E955C94E7D649aD1Cb32BA90295591&startblock=0&endblock=99999999&sort=asc&apikey=4UBFZT7AHFZ67HFIJKEQC7XC1HAYR8EDPG`)
    .then(res => res.json())
}