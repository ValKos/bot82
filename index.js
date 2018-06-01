const url = "https://api.ethermine.org/miner/0x79cdb8174E097dB3a391d29Aefc988581456cF00/currentStats"
// const express = require ('express');
// const port = process.env.PORT || 3000;
// var app = express();


const TeleBot = require('telebot');
const bot = new TeleBot('600854833:AAEgjiOAwg8HAd9OJt-QUKB1OwEVacZiU-g');

const axios = require('axios');
// var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

bot.on('text', (msg) => {
  axios.get(url)
  .then(function (d) {
    // msg.reply.text(data.data.bpi.USD.rate)
    msg.reply.text(`Workers:${d.data.data.activeWorkers},currHashr:${Math.floor(d.data.data.currentHashrate/1000000)}`)
  })
  .catch(function () {
    msg.reply.text('Error')
  })
});
bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome!'));


// axios.get(url)
// .then(function (data) {
//   console.log(data.data.bpi.USD.rate)
// })
// .catch(handleErrors)
//
// function handleErrors(err) {
//     if (err.response) {
//       console.log("Problem With Response ", err.response.status);
//     } else if (err.request) {
//       console.log("Problem With Request!");
//     } else {
//       console.log('Error', err.message);
//     }
//   }



bot.start();

// app.listen(port, ()=> {
//   console.log(`Server is up on port ${port}`);
// });
