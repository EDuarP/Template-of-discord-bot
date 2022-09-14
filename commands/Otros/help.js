const Discord = require('discord.js');

module.exports = {
    nombre: 'help',
    category: 'Otros',
    premium: false,
    alias: [ '' ],
    run: async(client, message, args) => {
     message.reply('No te quiero ayudar 😡');
    }
}