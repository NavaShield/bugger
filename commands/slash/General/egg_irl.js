const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "egg_irl",
    description: "generates random post image from r/egg_irl (if there is no image bot crashes btw)",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction, config, db) => {
        const response = await fetch('https://www.reddit.com/r/egg_irl/random.json');
        const data = await response.json();
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle("🥚egg_irl🥚")
                    .setImage(`${data[0].data.children[0].data.url}`)
            ],
            ephemeral: true
        })
    },
};
