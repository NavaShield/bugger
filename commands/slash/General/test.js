const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const pornpic = require('porn-picture')

module.exports = {
    name: "test",
    description: "test",
    type: 1,
    options: [
        {
          name: "choice",
          description: "Choose something!",
          type: 3,
          required: true,
          choices: [
              {
                  name: "Choice #1",
                  value: "Choice1"
              },
              {
                  name: "Choice #2",
                  value: "Choice2"
              }
          ]
      }
  ],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction, config, db) => {
        const  thing = interaction.options.get('choice').value;
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setDescription(thing)
            ],
            ephemeral: false
        })
    },
};
