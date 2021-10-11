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
    const arguments = message.content.slice().split(/ +/);
    const lowercock = arguments.toLowerCase();
    console.log(lowercock)
})

client.login(SUSSYSTARTUP)
