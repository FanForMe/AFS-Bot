const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "=";
client.on('ready', () => {
    console.log('I am ready!');
});



  client.on('guildMemberAdd', member => {
  member.addRole('name', "• New")
});

client.on('message', message => {
  let log = message.guild.channels.find('name', "log") 
  let act = message.guild.roles.find('name', "• Verified")
  let user = message.mentions.members.first();
  if(message.content.startsWith(prefix + "act")){
    var embed = new Discord.RichEmbed() 
    .setAuthor(message.author.username) 
    .setThumbnail(user.avatarURL)
    .addField('User Activated', ${user} get rank ${Member})
    .addField('By', <@${message.author.id}>)
    .setTimestamp()
    .setFooter("Codescopyright")
  log.send({embed})
  message.channel.send({embed})
  user.addRole(${act})
  }
});




client.login(process.env.BOT_TOKEN);
