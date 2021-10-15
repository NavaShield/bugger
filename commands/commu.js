module.exports = {
	name: 'commu',
	description: 'ball',
	execute(client, message, args) {
                const mem = message.author()
                const chan = client.channels.get(`${args[0]}`)
                  mem.setVoiceChannel(chan)
                    .then(() => console.log(`Moved ${mem.displayName} to ${chan}`))
                .catch(console.error);
	},
};