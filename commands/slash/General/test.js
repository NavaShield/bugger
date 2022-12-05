const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    name: "test",
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
        const  thing = interaction.options.get('text').value;
        console.log(thing)
    },
};
