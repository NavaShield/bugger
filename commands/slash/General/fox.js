const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "fox",
    description: "your welcome blong and kat",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction, config, db) => {
        const response = await fetch('https://randomfox.ca/floof/');
        const data = await response.json();
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle("🦊Random Fox Image🦊")
                    .setImage(`${data.image}`)
            ],
            ephemeral: false
        })
    },
};
