const { EmbedBuilder } = require("discord.js");

module.exports = {
    id: "popup",
    run: async (client, interaction, config, db) => {

        return interaction.reply(`${interaction.fields.getTextInputValue('something')}`);

    },
};
