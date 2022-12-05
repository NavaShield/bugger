const { Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const config = require('./config/config');
const colors = require("colors");
const fs = require("fs");
const http = require("http");

// Creating a new client:
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
    Partials.Reaction
  ],
  presence: {
    activities: [{
      name: "bot",
      type: 0
    }],
    status: 'online'
  }
});

// Host the bot:
// require('http').createServer((req, res) => res.end('Ready.')).listen(3000);

// Getting the bot token:
const AuthenticationToken = process.env.TOKEN || config.Client.TOKEN;
if (!AuthenticationToken) {
  console.warn("[CRASH] Authentication Token for Discord bot is required! Use Envrionment Secrets or config.js.".red)
  return process.exit();
};

// Handler:
client.prefix_commands = new Collection();
client.slash_commands = new Collection();
client.user_commands = new Collection();
client.message_commands = new Collection();
client.modals = new Collection();
client.events = new Collection();

module.exports = client;

["prefix", "application_commands", "modals", "events", "mongoose"].forEach((file) => {
  require(`./handlers/${file}`)(client, config);
});

// Login to the bot:
client.login(AuthenticationToken)
  .catch((err) => {
    console.error("[CRASH] Something went wrong while connecting to your bot...");
    console.error("[CRASH] Error from Discord API:" + err);
    return process.exit();
  });

// keep bot on life support
// client.on('ready', () => {
//     setInterval(function() {
//       http.get("http://iforgor.herokuapp.com");
//     }, 300000); // every 5 minutes (300000)
// })

// client.on("ready", ready => {
//     const server = http.createServer((req, res) => {
//         res.writeHead(200, { 'content-type': 'text/html' })
//         fs.createReadStream('index.html').pipe(res)
//       })
//       server.listen(process.env.PORT || 3000)
// })

// Handle errors:
process.on('unhandledRejection', async (err, promise) => {
  console.error(`[ANTI-CRASH] Unhandled Rejection: ${err}`.red);
  console.error(promise);
});
