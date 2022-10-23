const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "gayrate",
    description: "tells you how gay you are because you're too closeted to tell people yourself lmao",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction, config, db) => {
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setDescription(`You are ${Math.floor(Math.random() * 100) + 1}% gay :rainbow_flag:`)
                    .setColor('Blue')
            ],
            ephemeral: false
        })
    },
};
