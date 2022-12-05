const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
    name: "test",
    description: "test",
    type: 1,
    options: [
        {
            name: "text",
            description: "write anything you want!",
            type: 3,
            required: true
        }
    ],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction, config, db) => {
        const  thing = interaction.options.get('text').value;
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setDescription(thing)
            ],
            ephemeral: true
        })
    },
};
