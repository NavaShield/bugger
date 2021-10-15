module.exports = {
	name: 'commu',
	description: 'ball',
	execute(client, message, args) {
        async member => {
        if(args[0] === undefined) return;
        let JLChannel = member.guild.channels.cache.find(channel => channel.id === '885925085276405851')
        JLChannel.send(`${args}`)
        }
	},
};