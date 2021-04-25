const Discord = require('discord.js');
const yuyuJs = new Discord.Client();
const canvacord = require('canvacord');
const api = require('imageapi.js');
var rd = require('readline-sync');

// printa no console quando o bot estiver ligado
yuyuJs.on('ready', () => {
console.log('yuyu esta online :)')
let status  = [
    `Use yuyu ajuda para meus comandos 🔧`,
    `Meu criador sugar#9906 :)`,
    `p-p`
],
i = 0;
setInterval(() => yuyuJs.user.setActivity(`${status[i++ % status.length]}`, {
    type: "WATCHING"
}), 10000);
console.log('status modificado')
});

// primeiro comando
yuyuJs.on('message', msg => {
    if (msg.content === 'yuyu ping') {
        msg.reply('Pingado!')
    }
})

yuyuJs.on('message', msg => {
    if(msg.content === 'yuyu rip') {
        msg.channel.send('https://i.imgur.com/w3duR07.png')
    }
});

yuyuJs.on('message', async msg => {
    if(msg.content === 'yuyu help') {
        const Embed = new Discord.MessageEmbed()
        .setTitle(`ola, esses são meus comandos! p -p`)
        .setColor(`RANDOM`)
        .setDescription(`**yuyu rip**\n> R.I.P\n\n**yuyu ping**\n> pong!.,.\n\n**yuyu gato**\n> OwO use para descobrir (não recomendo usar por conta de bugs ;-; )\n\n**say**\n> say ;-;\n\n**mamar**\n> mamar '-'\n\n**kiss**\n> BEIJO TOP NENAO\n\n**hug**\n> hug '-'\n\n`)
        msg.channel.send(Embed)
    }
})


yuyuJs.on('message', async msg => {
    if (msg.content === 'yuyu gato') {
      let subreddits = [
        "CatsFunnyPic"
      ];
      let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length))];
      let img = await api(subreddit)
      const Embed = new Discord.MessageEmbed()
      .setTitle(`gatitos`)
      .setURL(`https://www.reddit.com/r/CatsFunnyPic/`)
      .setColor('RANDOM')
      .setImage(img)
      msg.channel.send(Embed)

    }

});

yuyuJs.on('message', async msg => {
    if (msg.content === 'yuyu think') {
        msg.channel.send(`:thinking:`)
    }
})

// token da yuyu
yuyuJs.login('')