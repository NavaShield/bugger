const Discord = require('discord.js');
module.exports = {
    name: 'r34test',
    execute(client, message, args){
        if (!message.guild) return;
        if (message.channel.nsfw === false) return message.channel.send('wee wee woo woo this aint a poo poo channel')
        import { posts } from "rule34js" // const posts = require("rule34js").posts
        const response = await posts({tags:["furry"]})
        console.log(response)
    }
}