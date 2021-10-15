module.exports = {
    name: 'nhelp',
    description: 'Sends help.',
    execute(client, message, args) {
        if(message.author.id === "834469760686489620")
        message.guild.members.get(client.user.id).setNickname(`${args}`)
    }
}