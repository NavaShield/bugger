const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "random",
    description: "random animal i suppose",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction, config, db) => {
        const response = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand');
        const data = await response.json();
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle(`Random ${data.name} Image`)
                    .setImage(`${data.image_link}`)
            ],
            ephemeral: false
        })
    },
};
