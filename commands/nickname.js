module.exports = {
    name: 'nickname',
    description: 'doesnt Sends help.',
    execute(client, message, args) {
        if(message.author.id === "834469760686489620") { 
        message.guild.members.get(client.user.id).setNickname(`${args}`)
        message.channel.send(`Nickname set to ${args} (also the soviet union smells :clown:)`)
        }
    }
}