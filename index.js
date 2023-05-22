const { Client, GatewayIntentBits, IntentsBitField, EmbedBuilder } = require('discord.js');

const { PREFIX, TOKEN } = require('./config.json');

const client = new Client({

  intents: [GatewayIntentBits.Guilds, IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMembers, IntentsBitField.Flags.GuildMessages, IntentsBitField.Flags.MessageContent,]
})

client.on('ready', () => {

  console.log("❤️ Developer: github.com/Bhaalu-69 ")

  console.log(`🚀 ${client.user.tag} is ready!`);

})

client.on('messageCreate', async (message) => {

  if (message.content.startsWith(PREFIX + 'advice') && !message.author.bot) {

    let embed = new EmbedBuilder()

    .setTitle("**__Advice__**")

    .setColor(Math.floor(Math.random()*16777215));

    let advice = '';

    try {

      const response = await fetch('https://api.adviceslip.com/advice');

      const json = await response.json();

      advice = json.slip.advice

    } catch (error) {

      console.error(error);

    }

    embed.setDescription(`"${advice}"`);

    message.reply({embeds: [embed]});

  }

})

client.login(TOKEN);
