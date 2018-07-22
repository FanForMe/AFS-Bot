const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "=";
client.on('ready', () => {
    console.log('I am ready!');
});


const secreT = [ "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.", "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.", "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.", "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.", "**ان تعالج ألمك بنفسك تلك هى القوة**.",  "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.",  "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.",  "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.",  "**المناقشات العقيمة لا تنجب افكارا**.",  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.",  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", ]


client.on('message', message => {
  if (message.content.startsWith("=خواطر")) {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
 var embed = new Discord.RichEmbed()
 .setColor('RANDOM')

  .setThumbnail(message.author.avatarURL) 
.addField('لعبه خواطر' ,
 `${secreT[Math.floor(Math.random() * secreT.length)]}`)
 message.channel.sendEmbed(embed);
 console.log('[id] Send By: ' + message.author.username)
   }
});


client.on('message', message => {
       
    if(message.content == prefix + "=فكك") {
        var ask = fkk[Math.floor(Math.random() * fkk.length)];
message.channel.send(`${ask.f}`)
.then(() => {
  message.channel.awaitMessages(response => response.content === `${ask.k}`, {
    max: 1,
    time: 20000,
    errors: ['time'],
  })
  .then((collected) => {
      
message.channel.send(`لقد قمت بكتابة الإجابة الصحيحة خلال الفتره المحددة (:`)
  })
    .catch(() => {
      message.channel.send('****');
    })
})

    }
   });



client.login(process.env.BOT_TOKEN); 
