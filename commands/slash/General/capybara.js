const { EmbedBuilder } = require("discord.js");
// adding comment so it builds again
module.exports = {
    name: "cat",
    description: "cat (not to be confused with kat)",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction, config, db) => {
        const response = await fetch('https://api.capybara-api.xyz/v1/image/random');
        const data = await response.json();
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle("Random Capybara Image")
                    .setImage(`${data.image_urls.original}`)
            ],
            ephemeral: false
        })
    },
};