const Discord = require('discord.js');
const { Client, Intents,MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING] });

client.on("ready", () => {
  console.log(`✅ | Logged as ${client.user.tag}`);
})
//////////////////////////////////////
///
client.login(process.env.token)

const prefix = "$"

client.on("message",message => {
  if(message.content === prefix + 'ping')
  message.channel.send(new Discord.MessageEmbed()
  .setDescription("**please wait**")
  )
      message.edit(new Discord.MessageEmbed()
  .setDescription("**please wait**"))
       message.edit(new Discord.MessageEmbed()
  .setDescription("**please wait**"))
        message.edit(new Discord.MessageEmbed()
  .setDescription("**please wait**"))
         message.edit(new Discord.MessageEmbed()
         .setTitle("**PONG**")
         .setDescription(`**MY PING IS,\`\`\`[${client.ws.ping}]\`\`\`**`) 
         .setColor("RANDOM")
         )
 
})
