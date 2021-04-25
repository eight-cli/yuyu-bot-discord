const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://images-ext-1.discordapp.net/external/8OmEbFyrowjkfZp6_UKh3lPoHsiqOUzYRCNZHaRR8Bk/https/i.imgur.com/5Tjpori.mp4',
  'https://images-ext-1.discordapp.net/external/A4rCiqXnpn2obDUsJcm0rQnbGA4Vdb-1uJaVtSWAUcs/https/i.imgur.com/JgXWxWf.mp4',
  'https://images-ext-1.discordapp.net/external/A4rCiqXnpn2obDUsJcm0rQnbGA4Vdb-1uJaVtSWAUcs/https/i.imgur.com/JgXWxWf.mp4'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('TA QUERENDO MAMAR O AR MENO');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('MAMADA')
        .setColor('#ed37db')
        .setDescription(`${message.author} mamou ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setFooter('MAMADA');
  await message.channel.send(embed);
}