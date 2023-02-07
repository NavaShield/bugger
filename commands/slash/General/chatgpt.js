const {
    EmbedBuilder
} = require("discord.js");

module.exports = {
    name: "chatgpt",
    description: "ai and stuff",
    type: 1,
    options: [{
        name: "prompt",
        description: "write anything you want!",
        type: 3,
        required: true
    }, ],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction, config, db) => {
        if(interaction.options.get('prompt') === null) interaction.reply({embeds: [
            new EmbedBuilder()
            .setTitle('Error')
            .setDescription('You did not provide a question. Please try again with a question attached.')
            .setColor('Red')
        ],
        ephemeral: true 
    });
        interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setTitle('ChatGPT')
                .setDescription('Please wait..')
                .setFooter({
                    text: `Your question was: ${interaction.options.get('prompt').value}`
                })
                .setColor('Yellow')
            ],
        })
        const {
            ChatGPTAPI
        } = await import('chatgpt')
        const api = new ChatGPTAPI({
            apiKey: process.env.apikey
        })
        client.gpt = api;
        const res = await api.sendMessage(interaction.options.get('prompt').value, {
            onProgress: (partialResponse) => interaction.editReply({
                embeds: [new EmbedBuilder().setTitle("ChatGPT").setDescription(partialResponse.text).setFooter({
                    text: `Your question was: '${interaction.options.get("prompt").value}'`
                }).setColor("Green")]
            })
        })
        return interaction.editReply({
            embeds: [
                new EmbedBuilder()
                .setTitle('ChatGPT')
                .setDescription(res.text)
                .setFooter({
                    text: `Your question was: '${interaction.options.get('prompt').value}'\nConversation ID: ${res.conversationId}`
                })
                .setColor('Green')
            ],
        })
    },
};
