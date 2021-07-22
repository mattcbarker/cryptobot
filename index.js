const express = require('express'); //loads express
const CoinGecko = require('coingecko-api'); //node-client handler

const app = express(); //call express
const CoinGeckoClient = new CoinGecko(); //load coingeckoclient

app.get('/', (req, res) =>{
    makeCall(); //actually does the API call
    res.send("hello world"); //framework bullshit
})

let makeCall = async() => {
    let data = await CoinGeckoClient.coins.fetch('bitcoin', {}); //async function
    console.log(data.data.market_data.current_price.usd); //current price for bitcoin in USD
}

app.listen(3000, () => {
    console.log("listening on port 3000"); //starts the port
});