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
            }            
          ]
      }
  ],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction, config, db) => {
        if(!interaction.channel.nsfw) return interaction.reply({embeds:[new EmbedBuilder().setDescription("Please run this command in an nsfw channel. :pray:")],ephemeral:!1});
        const  thing = interaction.options.get('pornography').value;
        var img = await pornpic.nsfw[thing]()
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setImage(img)
                    .setFooter({ text: `Requested by ${interaction.user.tag}`})
            ],
            ephemeral: false
        })
    },
};
