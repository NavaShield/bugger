module.exports = {
	name: 'givensfw',
	description: 'ball',
	execute(client, message, args) {
        let role = message.guild.roles.find(r => r.name === "NSFW");
        message.author.roles.add(role);
	},
};