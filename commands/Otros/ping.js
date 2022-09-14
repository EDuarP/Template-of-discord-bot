const Discord = require('discord.js');
const ms = require('ms');
module.exports = {
    nombre: 'ping',
    category: 'Otros',
    premium: false,
    alias: [ 'p' ],
    run: async(client, message, args) => {
    message.channel.send('owo').then(msg => {
        let ping = msg.createdTimestamp - message.createdTimestamp;
        msg.edit({
            content: null,
            embeds: [new Discord.MessageEmbed().setColor('BLURPLE').setTitle('Mi ping es de;').setDescription(`${ms(ping)} uwu`)]
        });
        
    });
    }
}