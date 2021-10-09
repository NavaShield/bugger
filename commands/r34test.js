const Discord = require('discord.js');
const Booru = require('booru')
module.exports = {
    name: 'r34test',
    execute(client, message, args){
        if (!message.guild) return;
        if (message.channel.nsfw === false) return message.channel.send('wee wee woo woo this aint a poo poo channel')
        const sb = Booru.forSite('sb')
        sb.search(['ball'], { limit: 2 })
    }
}
