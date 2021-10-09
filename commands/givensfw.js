
module.exports = {
	name: 'givensfw',
	description: 'ball',
	execute(client, message, args) {
        let role = message.guild.roles.cache.find(r => r.id === "831968147924975659");
        message.author.roles.add(role);
	},
};