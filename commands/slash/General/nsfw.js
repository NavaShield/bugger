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
        const data = new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Replies with your input!')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to echo back'));
    },
};
