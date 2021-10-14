const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'embed',
    description: 'Sends help.',
    execute(client, message, args) {
        	let embed = new MessageEmbed()
			.addFields(
				{ name: `Submitter`, value: `${message.member.user.tag}`},
                { name: `Suggestion`, value: `${args}`}
			)
            .setThumbnail(message.author.avatarURL())
            .setFooter(message.member.user.tag, message.author.avatarURL())
			.setColor("RANDOM")
			message.channel.send(embed)
	}
}