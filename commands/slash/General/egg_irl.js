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
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle("🥚egg_irl🥚")
                    const fetch=(...t)=>import("node-fetch").then(({default:n})=>n(...t));function randomEgg(){return fetch("https://www.reddit.com/r/egg_irl/random.json").then(t=>t.json()).then(t=>t[0].data.children[0].data.url)}randomEgg().then(t=>.setImage(t));
            ],
            ephemeral: true
        })
    },
};
