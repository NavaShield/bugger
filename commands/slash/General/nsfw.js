const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    name: "nsfw",
    description: "test",
    type: 3,
    options: [],
    choices: [
        {
           name: "Choice 1",
           value: "choice_1"
        },
        {
           name: "Choice 2",
           value: "choice_2"
        },
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
