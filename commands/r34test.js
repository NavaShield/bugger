const Discord = require('discord.js');
const Booru = require('booru')
module.exports = {
    name: 'r34test',
    execute(client, message, args){
        if (!message.guild) return;
        if (message.channel.nsfw === false) return message.channel.send('wee wee woo woo this aint a poo poo channel')
        Booru.search('safebooru', ['glaceon'], { limit: 3, random: true })
  .then(posts => {
    for (let post of posts)
      console.log(post.fileUrl, post.postView)
  })
    }
}
