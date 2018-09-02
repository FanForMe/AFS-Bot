const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "=";
client.on('ready', () => {
    console.log('I am ready!');
});




  const froos = {
       ping :    function() { =ping
            message.channel.send("pong")
        }

    },
       id: function() {
            message.channel.send(arguments[0].author.id)
        }

    },
    copyright: "© 2018 - codes"
}
module.exports = froos;


client.login(process.env.BOT_TOKEN);
