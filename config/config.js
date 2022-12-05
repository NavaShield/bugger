var secretconfig = require('../../secretconfig.json')
module.exports = {

  Prefix: "%", // YOUR BOT PREFIX.

  Users: {
    OWNERS: ["442108718902018049", "834469760686489620"] // THE BOT OWNERS ID.
  },

  Handlers: {
    MONGO: "" // YOUR MONGO URI. (USE THIS ONLY IN VSCODE)
  },

  Client: {
    TOKEN: secretconfig.token, // YOUR BOT TOKEN. (USE THIS ONLY IN VSCODE)
    ID: "1018485349602820136" // YOUR BOT ID.
  }

}
