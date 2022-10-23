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
                    .setTitle('Gay Rate')
                    .setDescription(`You are ${Math.floor(Math.random() * 100) + 1}% gay :rainbow_flag:`)
                    .setFooter({ text: `Requested by ${message.user.tag}`});
                    .setColor(0x08FCFC)
            ],
            ephemeral: false
        })
    },
};
