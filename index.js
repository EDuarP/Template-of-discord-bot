const Discord = require('discord.js');
const client = new Discord.Client({ intents: 32501 })
const CONFIG = require('./config.json');
const fs =require('fs');
client.on(
    'ready', () => {
        client.channels.cache.get('867048087825809419').send('Holaaa');
        
        //eventos
        const { readdirSync } = require('fs');
        client.commands = new Discord.Collection();
        for (const file of readdirSync('./events/')) {
            if(file.endsWith('.js')) {
             const fileName = file.substring(0, file.length - 3);
             const fileContents = require(`./events/${file}`);
             client.on(fileName, fileContents.bind(null, client));
             delete require.cache[require.resolve(`./events/${file}`)];
            }
        }

        //comandos
        for (const subFile of readdirSync('./commands/')) {
            for (const file of readdirSync(`./commands/${subFile}`)) {
                if(file.endsWith('.js')) {
                    let fileName = file.substring(0, file.length - 3);
                    let fileContents = require(`./commands/${subFile}/${file}`);
                    client.commands.set(fileName, fileContents);
                }
            }
        }


    }
);
client.login(CONFIG.token).then(() => console.log('Kanna se ha conectado'));

