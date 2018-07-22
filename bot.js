const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "=";
client.on('ready', () => {
    console.log('I am ready!');
});


const hkm = [
   '*** منشن الجميع وقل انا اكرهكم. ***',
'*** اتصل على امك و قول لها انك تحبها :heart:. ***',
   '***     تصل على الوالده  و تقول لها  احب وحده.***',
   '*** تتصل على شرطي تقول له عندكم مطافي.***',
   '*** صور اي شيء يطلبه منك الاعبين.***',
   '*** اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص. ***',
   '*** اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك.***',
   '*** اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف.***',
   '***  تروح عند شخص تقول له احبك. ***',
   '***روح عند اي احد بالخاص و قول له انك تحبه و الخ.***',
   '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه. ***',
   '*** روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل. ***',
   '*** اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك. ***',
   '*** ذي المرة لك لا تعيدها.***',
   '*** ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام.***',
   '*** اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل..... ***',
   '*** تكلم باللهجة السودانية الين يجي دورك مرة ثانية.***',
   '***سو مشهد تمثيلي عن مصرية بتولد.***',
   '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية. ***',
   '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية.***',
   '*** سامحتك خلاص مافيه عقاب لك :slight_smile:. ***',
   '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه.***',
   '*** تتصل على الوالده  و تقول لها خطفت شخص. ***',
   '*** روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك.  ***'
]
 client.on('message', message => {
 if (message.content.startsWith("=حكم")) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة حكم ..")
  .setColor('RANDOM')
  .setDescription(`${hkm[Math.floor(Math.random() * hkm.length)]}`)
   message.channel.sendEmbed(mariam);
   message.react(":thinking:")
  }
});


var memes =["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
client.on('message', message => {
if(message.content.startsWith("=هل تعلم")) {
     var embed = new Discord.RichEmbed()
.setImage(memes[Math.floor(Math.random() * memes.length)])
message.channel.sendEmbed(embed);
}
});


client.login(process.env.BOT_TOKEN);
