const Booru = require('booru')
const { MessageEmbed, MessageFlags } = require("discord.js")
module.exports = {
	name: 'realb',
	description: 'ball',
	execute(client, message, args) {
        if (message.channel.nsfw === false) return message.channel.send('Please use this command in an nsfw channel.')
        Booru.search('realbooru', [`${args[0]}`], { limit: 1, random: true })
        .then(posts => {
          for (let post of posts)
          message.channel.send(post.fileUrl)
        })
	},
};