const configg = require("../config.json");
const discord = require("discord.js")

module.exports = {
    name: 'nhelp',
    description: 'Sends help.',
    execute(client, message, args) {
		if(args[0] == 'nsfw'){
			if (message.channel.nsfw === false) return message.channel.send('Please use this command in an nsfw channel.')
        	let embed = new discord.MessageEmbed() 
			.setTitle("Sussy ;)")
			.setDescription(`The prefix is: ${configg.prefix}`)
			.addFields(
				{ name: `${configg.prefix}e621`, value: `furry pyorn`},
				{ name: `${configg.prefix}r34`, value: `rule 34`},
				{ name: `${configg.prefix}realb`, value: `real pepol`},
				{ name: `${configg.prefix}xb`, value: `rule 34 again i think`},
			)
			.setColor("RANDOM")
			message.channel.send(embed)
	}}
}