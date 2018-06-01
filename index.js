const Promise = require('bluebird');
Promise.config({
  cancellation: true
});

const TelegramBot = require('node-telegram-bot-api');
const token = '600854833:AAEgjiOAwg8HAd9OJt-QUKB1OwEVacZiU-g';

const bot = new TelegramBot(token, {polling: true});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});


// const Telegraf = require('telegraf')
//
// const bot = new Telegraf(process.env."600854833:AAEgjiOAwg8HAd9OJt-QUKB1OwEVacZiU-g")
//
// bot.start((ctx) => ctx.reply('Welcome'))
// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on('sticker', (ctx) => ctx.reply('👍'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))
// bot.hears(/buy/i, (ctx) => ctx.reply('Buy-buy'))
//
// bot.startPolling()
