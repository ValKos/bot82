const TeleBot = require('telebot');
const bot = new TeleBot('600854833:AAEgjiOAwg8HAd9OJt-QUKB1OwEVacZiU-g');

bot.on('text', (msg) => msg.reply.text(msg.text));
bot.start();
