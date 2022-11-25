const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    name: "nsfw",
    description: "test",
    type: 1,
    options: [
        {
            name: "text",
            description: "write anything you want!",
            type: 3,
            required: false
        }
    ],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction, config, db) => {
        const thing = interaction.options.getSubcommand();
        console.log(thing)
    },
};
