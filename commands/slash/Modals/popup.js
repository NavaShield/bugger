const { EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require("discord.js");

module.exports = {
    name: "popup",
    description: "Replies with a modal menu!",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction, config, db) => {
        const modal = new ModalBuilder()
            .setCustomId('popup')
            .setTitle('My Modal');

        const something = new TextInputBuilder()
            .setCustomId('something')
            .setLabel("type what you want the bot to say")
            .setStyle(TextInputStyle.Short);

        const ActionRow = new ActionRowBuilder().addComponents(something);

        modal.addComponents(ActionRow);

        await interaction.showModal(modal);
    },
};
