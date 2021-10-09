const Booru = require('booru')
const { MessageEmbed, MessageFlags } = require("discord.js")
module.exports = {
	name: 'nhelp',
	description: 'ball',
	execute(client, message, args) {
        let embed = new MessageEmbed
        .setTitle("NSFW HELP")
        .setDescription(`!e621\n
        !r34\n
        !realb\n
        !xb`)
        .setFooter(`!e621 is furry\n
        !r34 and !xb is rule34\n
        !realb is real life`)
        message.channel.send(embed)
	},
};