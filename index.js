const fs = require('fs');
const discord = require('discord.js'); //Define the discord.js module
const client = new discord.Client(); //Creating discord.js client (constructor)
client.commands = new discord.Collection(); //bro i dont know
const { prefix, SUSSYSTARTUP, blacklisted } = require("./config.json"); //Token and other configs
const disbut = require('discord-buttons');
const nekoclient = require('nekos.life');
const neko = new nekoclient();
const { exec } = require('child_process');
const { config, execArgv } = require('process');
const http = require('http')
const communist = "406618810762657794"
disbut(client);

client.commands = new discord.Collection();
client.events = new discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, discord);
})

client.on('ready', () => {
    var http = require("http");
setInterval(function() {
    http.get("http://iforgor.herokuapp.com");
}, 300000); // every 5 minutes (300000)
})

client.on("ready", ready => {
    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'content-type': 'text/html' })
        fs.createReadStream('index.html').pipe(res)
      })
      
      server.listen(process.env.PORT || 3000)
})

client.on("message", message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;
  
	const args = message.content.slice(prefix.length).split(/ +/);
  
	const command = args.shift().toLowerCase();
  
	if (!client.commands.has(command)) return;
	  client.commands.get(command).execute(client, message, args);
})

client.on("message", message => {
    const args = message.content.slice(0)
    if(message.author.bot) return;
    if(message.channel.id === "630049627844116483"){
    message.delete()
    let embed = new discord.MessageEmbed()
			.addFields(
				{ name: `Submitter`, value: `${message.member.user.tag}`},
                { name: `Suggestion`, value: `${args}`}
			)
            .setThumbnail(message.author.avatarURL())
            .setFooter(message.member.user.tag, message.author.avatarURL())
			.setColor("RANDOM")
			message.channel.send(embed)
            .then(function (message) {
                message.react("👍")
                message.react("👎")
              }).catch(function() {
                //Something
               });
            }else{return;}
})

client.on('message', message => {
    if(message.content === "prefer") {
        message.reply("shhh")
    }
})

client.on('guildMemberAdd', async member => {
    const joinColor = ('#00ff00');
    const niceColor = ('#00FFFF');

    let loggingChannel = member.guild.channels.cache.find(channel => channel.name === 'logs')
    if (!loggingChannel) return;
    let JLChannel = member.guild.channels.cache.find(channel => channel.name === '👋│joins-quits')
    if (!JLChannel) return;
    //logging
    const created = new Intl.DateTimeFormat('en-GB').format(member.user.createdAt);
    let createdAt = member.user.createdAt; 
    let createdAtNow = new Date(); 
    let createdAtTime = createdAtNow.getTime() - createdAt.getTime(); 
    let createdAtDays = createdAtTime / (1000 * 3600 * 24);
    let finalCreatedAtDays = createdAtDays.toFixed(0)

    try {
        client.guilds.cache.find(member.guild.id).channels.cache.find(channel => channel.id === 'channel id').send('fsdfsdfs')
    } catch (error) {
        console.log(error)
    }

    let logEmbed = new Discord.MessageEmbed()
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setTitle(member.user.tag + ' has just joined the server!')
    .addField('Tag', member)
    .addField('Account Creation Date', created + '\n' + finalCreatedAtDays + ' days ago.')
    .setColor(joinColor)
    .setTimestamp()
    loggingChannel.send(logEmbed)

    let botCount = member.guild.members.cache.filter(bot => bot.user.bot).size;
    let joinsEmbed = new Discord.MessageEmbed()
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setTitle(member.user.tag + ' has just joined the server!')
    .addField('Account Creation Date', created + '\n' + finalCreatedAtDays + ' days ago.')
    .addField('New member count', member.guild.memberCount - botCount)
    .setColor(joinColor)
    .setTimestamp()
    JLChannel.send(joinsEmbed)
})

client.on('guildMemberRemove', async member => {
    let loggingChannel = member.guild.channels.cache.find(channel => channel.name === 'logs')
    if (!loggingChannel) return;
    let JLChannel = member.guild.channels.cache.find(channel => channel.name === 'joins-and-leaves')
    if (!JLChannel) return;
    const leaveColor = ('#ff0000');
    let botCount = member.guild.members.cache.filter(bot => bot.user.bot).size;
    //Logging
    //Created
    const created = new Intl.DateTimeFormat('en-GB').format(member.user.createdAt);
    let createdAt = member.user.createdAt; 
    let createdAtNow = new Date(); 
    let createdAtTime = createdAtNow.getTime() - createdAt.getTime(); 
    let createdAtDays = createdAtTime / (1000 * 3600 * 24);
    let finalCreatedAtDays = createdAtDays.toFixed(0)

    //Joined
    const Joined = new Intl.DateTimeFormat('en-GB').format(member.joinedAt);
    let JoinedAt = member.joinedAt; 
    let JoinedAtNow = new Date(); 
    let JoinedAtTime = JoinedAtNow.getTime() - JoinedAt.getTime(); 
    let JoinedAtDays = JoinedAtTime / (1000 * 3600 * 24);
    let finalJoinedAtDays = JoinedAtDays.toFixed(0)

    let logEmbed = new Discord.MessageEmbed()
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .addField('Guildmember leave', member.user.username + ' has just left the server!')
    .addField('Server Joined Date', Joined + '\n' + finalJoinedAtDays + ' days ago.')
    .addField('Account Creation Date', created + '\n' + finalCreatedAtDays + ' days ago.')
    .addField('New member count', member.guild.memberCount - botCount)
    .setColor(leaveColor)
    .setTimestamp()
    loggingChannel.send(logEmbed)

    let leavesEmbed = new Discord.MessageEmbed()
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .addField('Guildmember leave', member.user.username + ' has just left the server!')
    .addField('Server Joined Date', Joined + '\n' + finalJoinedAtDays + ' days ago.')
    .addField('Account Creation Date', created + '\n' + finalCreatedAtDays + ' days ago.')
    .addField('New member count', member.guild.memberCount - botCount)
    .setColor(leaveColor)
    .setTimestamp()
    JLChannel.send(leavesEmbed)
});

client.login(SUSSYSTARTUP)
