const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const pornpic = require('porn-picture')

module.exports = {
    name: "test",
    description: "test",
    type: 1,
    options: [
        // random
        // thighs
        // ass
        // panties
        // cosplay
        // pussy
        // catGirl
        // rule34
        // hentai
        {
          name: "pornography",
          description: "oh good lord!",
          type: 3,
          required: true,
          choices: [
              {
                  name: "random",
                  value: "random"
              },
              {
                name: "thighs",
                value: "thighs"
            },
            {
                name: "ass",
                value: "ass"
            },
            {
                name: "panties",
                value: "panties"
            },
            {
                name: "cosplay",
                value: "cosplay"
            },
            {
                name: "pussy",
                value: "pussy"
            },
            {
                name: "catGirl",
                value: "catGirl"
            },
            {
                name: "rule34",
                value: "rule34"
            },
            {
                name: "hentai",
                value: "hentai"
            },
            
          ]
      }
  ],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction, config, db) => {
        const  thing = interaction.options.get('pornography').value;
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setDescription(`Option: ${thing}\nNSFW Channel: ${interaction.channel.nsfw}`)
            ],
            ephemeral: false
        })
    },
};
