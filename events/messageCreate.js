const prefix = 'k';
module.exports = async(client, message) => {
if (message.author.bot || message.channel.type == 'DM' || !message.content.startsWith(prefix))return;
let args = message.content.slice(prefix.length).trim().split(/ +/);
let command = args.shift().toLowerCase();
let cmd = client.commands.get(command) || client.commands.find(x => x.alias.includes(command));
if(!cmd)return message.reply('No encontre ese comando :c');
else await cmd.run(client, message, args);

}