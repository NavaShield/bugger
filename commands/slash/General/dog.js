const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "dog",
    description: "woof woof and bark abrk",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction, config, db) => {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle("<:BORK:1034109191075414087>Random Dog Picture<:BORK:1034109191075414087>")
                    .setImage(`${data.message}`)
            ],
            ephemeral: false
        })
    },
};
