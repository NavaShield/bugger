const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "cat",
    description: "cat (not to be confused with kat)",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction, config, db) => {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=1');
        const data = await response.json();
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle("<:CatLeft:1034113877434191923>Random Cat Image<:CatRight:1034113866264760381>")
                    .setImage(`${data[0].url}`)
            ],
            ephemeral: false
        })
    },
};
