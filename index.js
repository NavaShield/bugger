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

client.login(SUSSYSTARTUP)
