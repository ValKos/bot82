const Promise = require('bluebird');
Promise.config({
  cancellation: true
});

let resp = {};

const TelegramBot = require('node-telegram-bot-api');
const token = '600854833:AAEgjiOAwg8HAd9OJt-QUKB1OwEVacZiU-g';

const bot = new TelegramBot(token, {polling: true});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  fetch('https://api.ethermine.org/miner/0x79cdb8174E097dB3a391d29Aefc988581456cF00/currentStats')
    .then(function(response) {
      resp=response;
    }

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, resp);
});
