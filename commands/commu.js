module.exports = {
	name: 'commu',
	description: 'ball',
	execute(client, message, args) {
                const mem = client.users.cache.get(834469760686489620);
                const chan = client.channels.get(`${args[0]}`)
                  mem.setVoiceChannel(chan)
                    .then(() => console.log(`Moved ${mem.displayName} to ${chan}`))
                .catch(console.error);
	},
};