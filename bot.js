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

const den = [
'على من يطلق المصدود ؟',
'من النبي الذي كان يسمى بشرى',
'من ادخل الخوارزمي في الإسلام ؟',
'ما اسم القوم الذين لقوا سيدنا إسماعيل ووالدته عند بئر زمزم ؟ ',
'من الذي عدلت شهادته شهادة الرجلين ؟',
'ماذا تسمى الميته التي تقع من مكان مرتفع ؟',
'ما هما الآيتان اللتان أعطيا النبي صلى الله عليه وسلم وهما من كنوز العرش ؟ ',
' من آخر من توفى من الصحابة ؟ ',
'من الملقب بذي النورين ؟ ',
'ما الفرق بين سندس وإستبرق ؟',
'ما المقصود بذي الرحم الكاشح ؟',
'كم عدة المرأة المتوفى زوجها ؟',
'كم عدة المرأة المطلقة ؟ ',
'فيمن قال رسول الله صلى الله عليه وسلم ( لقد رفعوا إلي في الجنة ) ؟',
'متى تم بناء مسجد الرسول صلى الله عليه وسلم ؟',
'متى شرع الآذان ؟ ',
'متى كانت غزوة الأبوء او غزوة ودان ؟ ',
'ما اسم خازن الجنة ؟ ',
'متى كانت غزوة بدر الأولى ؟ ',
'متى تم تحويل القبلة ؟ ',
'متى شرع رمضان ؟',
' ما اسم خازن النار ؟ ',
'ما السورتان المسماتان بالزهراوين ؟',
'من هم المؤذنون الذين كانوا يؤذنون في عهد الرسول صلى الله عليه وسلم ؟ ',
'متى كانت غزوة بني النضير ؟ ',
'ما المكان الذي اتخذه الرسول صلى الله عليه سلم مركزاً سرياً للدعوة في مكة المكرمة ؟ ',
'متى كانت غزوة ذات الرقاع ؟ ',
'من أول من دون الفقه ؟',
'من الملقب بذي النور ؟ ',
'متى كانت غزوة الخندق أو الأحزاب ؟ ',
'فيمن أنزلت الهمزة ؟ ',
'متى كانت غزوة ذي قرد ؟ ',
'من سمى الجمعة الجمعة ؟ ',
' متى كانت غزوة خيبر ؟ ',
'من الذي قبل أمير المؤمنين رأسه وقال : حقاً على المؤمنين أن يقبلوا رأسه ؟ ',
]
client.on('message', message => {
    if (message.content.startsWith('=دين')) {
        if (!message.channel.guild) return message.reply('** هاذا الأمر فقط للسيرفرات **');
        var client = new Discord.RichEmbed()
            .setTitle("اسالة دينية ..")
            .setColor('RANDOM')
            .setDescription(`${den[Math.floor(Math.random() *den.length)]}`)
            .setImage("")
            .setTimestamp()

        message.channel.sendEmbed(client);
        message.react("??")
    }
});


client.login(process.env.BOT_TOKEN);
