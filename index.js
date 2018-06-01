// //const url = "https://api.ethermine.org/miner/0x79cdb8174E097dB3a391d29Aefc988581456cF00/currentStats"
// //var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
//
// const Promise = require('bluebird');
// Promise.config({
//   cancellation: true
// });
//
// let resp = {};
//
// const TelegramBot = require('node-telegram-bot-api');
// const token = '600854833:AAEgjiOAwg8HAd9OJt-QUKB1OwEVacZiU-g';
//
// const bot = new TelegramBot(token, {polling: true});
//
//
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//
//   // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, 'Received your message');
// });
const TeleBot = require('telebot');
const bot = new TeleBot('600854833:AAEgjiOAwg8HAd9OJt-QUKB1OwEVacZiU-g');

const axios = require('axios');
var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

bot.on('text', (msg) => {
  axios.get(url)
  .then(function (data) {
    msg.reply.text(data.bpi.EUR.rate)
  })
  .catch(function () {
    msg.reply.text('Error')
  })
});












bot.start();
