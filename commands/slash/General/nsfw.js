const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    name: "cat",
    description: "cat (not to be confused with kat)",
    type: 1,
    options: [],
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
