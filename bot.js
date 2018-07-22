const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "=";
client.on('ready', () => {
    console.log('I am ready!');
});


client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 50,
  };
if (message.content.startsWith("=اعلم")) { 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./a3lm/a3lm.json'); 
const item = type[Math.floor(Math.random() * type.length)]; 
const filter = response => { 
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانيه**').then(msg => {
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setFooter("اعلم  | NoobBot", 'https://cdn.discordapp.com/avatars/439427357175185408/3eb163b7656922ebc9e90653d50231f1.png?size=2048')
    .setDescription(`** ${item.type}**`)

    msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **الاجابه صحيحه**`); //حقوق discord.jpei

        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; 
            points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: **لا يوجد احد كتب الاجابه الصحيحه**`);
            console.log(`[Typing] ماحد فكك الكلمه `);
          })
        })
    })
}
});







client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 50,
  };
if (message.content.startsWith("=رياضيات")) { 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./read/read.json'); 
const item = type[Math.floor(Math.random() * type.length)]; 
const filter = response => { 
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانيه**').then(msg => {
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setFooter("رياضيات  | NoobBot", 'https://cdn.discordapp.com/avatars/439427357175185408/3eb163b7656922ebc9e90653d50231f1.png?size=2048')
    .setDescription(`** ${item.type}**`)

    msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **الاجابه صحيحه**`); //mohamed192837465#7033صاحب الكود

        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; 
            points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: **لا يوجد احد كتب الاجابه الصحيحه**`);
            console.log(`[Typing] ماحد قال الاجابه `);
          })
        })
    })
}
});


client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 50,
  };
if (message.content.startsWith("=ماينكرفت")) { 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./minecraft/minecraft.json'); 
const item = type[Math.floor(Math.random() * type.length)]; 
const filter = response => { 
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانيه**').then(msg => {
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setFooter("ماينكرفت  | NoobBot", 'https://cdn.discordapp.com/avatars/439427357175185408/3eb163b7656922ebc9e90653d50231f1.png?size=2048')
    .setDescription(`** ${item.type}**`)

    msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **الاجابه صحيحه**`); //mohamed192837465#7033صاحب الكود

        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; 
            points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: **لا يوجد احد كتب الاجابه الصحيحه**`);
            console.log(`[Typing] ماحد قال الاجابه `);
          })
        })
    })
}
});




client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 50,
  };
if (message.content.startsWith("=عواصم")) { 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./3wasem/3wasem.json'); 
const item = type[Math.floor(Math.random() * type.length)]; 
const filter = response => { 
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**اديك 15 ثاني�� لتوجد العاصمه الصحيحه**').then(msg => {
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setFooter("عواصم  | NoobBot", 'https://cdn.discordapp.com/avatars/439427357175185408/3eb163b7656922ebc9e90653d50231f1.png?size=2048')
    .setDescription(`**اكتب عاصمه: ${item.type}**`)

    msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **الاجابه صحيحه**`); //mohamed192837465#7033صاحب الكود

        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; 
            points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: **لا يوجد احد كتب الاجابه الصحيحه**`);
            console.log(`[Typing] ماحد قال الاجابه `);
          })
        })
    })
}
});

let points = JSON.parse(fs.readFileSync('./Points.json', 'utf8'));
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 50,
  };
if (message.content.startsWith(prefix + 'فكك')) { 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./fakk/fakk.json'); 
const item = type[Math.floor(Math.random() * type.length)]; 
const answer = item.answer 
const filter = response => { 
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانيه لتفكك الكلمه **').then(msg => {
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setFooter("فكك  | NoobBot", 'https://cdn.discordapp.com/avatars/439427357175185408/3eb163b7656922ebc9e90653d50231f1.png?size=2048')
    .setDescription(`**قم بكتابه الكلمه مفككه : ${item.type}**`)

    msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **الاجابه صحيحه**`); //mohamed192837465#7033صاحب الكود

        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; 
            points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: **ماحد قال الاجابه الصحيحه**`);
            console.log(`[Typing] ماحد فكك الكلمه `);
          })
        })
    })
}
});





client.on('message',  (message) => {
        if(message.content.startsWith("=كف")) {
  let user = message.mentions.users.first();
  if (!user) {
    /**
     * The command was ran with invalid parameters.
     * @fires commandUsage
     */
    return message.emit('commandUsage', message, this.help);
  }

  let punches = [
    'https://i.giphy.com/media/iWEIxgPiAq58c/giphy.gif',
    'https://i.giphy.com/media/DViGV8rfVjw6Q/giphy.gif',
    'https://i.giphy.com/media/GoN89WuFFqb2U/giphy.gif',
    'https://i.giphy.com/media/xT0BKiwgIPGShJNi0g/giphy.gif',
    'https://i.giphy.com/media/Lx8lyPHGfdNjq/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} عطاك كف  ${user.username}! 👊`,
      image: {
        url: punches[7mod.floor(7mod.random() * punches.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});










  client.on('message', message => {
    if (message.content.startsWith("=خواطر")) {
                 if(!message.channel.guild) return message.reply('** This command only for servers**');
   var embed = new Discord.RichEmbed()
   .setColor('RANDOM')
 
    .setThumbnail(message.author.avatarURL) 
  .addField('NoobBot' ,
   `${secreT[Math.floor(Math.random() * secreT.length)]}`)
   message.channel.sendEmbed(embed);
   console.log('[id] Send By: ' + message.author.username)
     }
 });












  
const cuttweet = [
  'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، م��ذا سترسم؟',
  'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
  'كت تويت | الحرية لـ ... ؟',
  'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
  'كت تويت ‏| كلمة للصُداع؟',
  'كت تويت ‏| ما الشيء الذي يُفارقك؟',
  'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
  'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
  'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
  'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
  '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
  'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
  '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
  '‏كت تويت | وش يفسد الصداقة؟',
  '‏كت تويت | شخص لاترفض له طلبا ؟',
  '‏كت تويت | كم مره خسرت شخص تحبه؟.',
  '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
  '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
  '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
  '‏كت تويت |أقوى كذبة مشت عليك ؟',
  '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
  'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
  '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
  '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
  '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
  '‏كت تويت | مطلبك الوحيد الحين ؟',
  '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

client.on('message', message => {
	var prefix = "="
if (message.content.startsWith("=كت تويت")) {
             if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(message.author.avatarURL) 
.addField('لعبه كت تويت' ,
`${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
message.channel.sendEmbed(embed);
console.log('[id] Send By: ' + message.author.username)
 }
});

const secreT = [
"**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
"**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
"**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
"**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
"**ان تعالج ألمك بنفسك تلك هى القوة**.", 
"**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
"**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
"**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
"**المناقشات العقيمة لا تنجب افكارا**.", 
"**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
"**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
]

















const zead = [
     '*** انا اسمي مريم ***',
     '*** م��حباَ ماهو اسمك ؟ ***',
     `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
     '*** هل تود مساعدتي ؟ ***',
     '*** لماذا هل انت قاسي القلب ؟ ***',
     '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
     '*** ابتعد عني قليل انني متعبة ***',
     '*** هل انت نادم على ماقلت ؟ ***',
     '*** ابتعد عني قليل انني متعبة ***',
     '*** هل انت نادم على ماقلت ؟ ***',
     '*** هل تود مساعدتي ؟ ***',
     '*** واو اشكرك انك شخصاَ رائع ! ***',
     '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
     '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
     '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
     '*** هيا اذاَ ***',
     '*** اود ان اسئلك سؤال ونحن في الطريق ***',
     '*** هل تراني فتاة لطيفة ام مخيفة ***',
     '*** اشكرك !  ***',
     '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
     '*** هل انت جاهز ؟ ***',
     '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
     '*** هل تود ان تراهم الان ***',
  '*** ان�� لست ا��حوت الازرق كما يدعون ***',
     '*** انا لست كاذبة صدقني***',
     '*** لماذا ارى في عينيك الخوف ؟ ***',
     '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
     '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
     '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
     '*** لماذا لم تدخل الغرفة ؟ ***',
     '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
     '*** لن تخرج حتى اعود لك بعد قليل ***',
     '*** المفتاح معك ! اكتب .مريم  ***',
     '*** مفتاح احمر , هل حصلت عليه ؟ ***',
     '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
     '*** مفتاح اسود . هل حصلت عليه ؟ ***',
     '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
     '*** لقد عادت من جديد الى المنزل ***',
     '*** لا تصدر اي صوت ! ***',
     '*** مريم : لقد عدت ***',
     '*** مريم : يا ايها المخادع اين انت ***',
     '*** مريم : اعلم انك هنا في المنزل ***',
     '*** مريم : ماذا تريد ان تسمع ***',
     '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
     '*** احد ما خرج من المنزل ***',
     '*** انتظر الجزء الثاني ساعدنا وانشر السيرفر  ***'
  ]
   client.on('message', message => {
	   	var prefix = "$"
   if (message.content.startsWith("=مريم")) {
    var mariam= new Discord.RichEmbed()
    .setTitle("NoobBot")
    .setColor('RANDOM')
    .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
    .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
     message.channel.sendEmbed(mariam);
     message.react("??")
    }
  });











  const adkar = [
    '**اذكار  | **اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.',
    '**اذكار  |  **اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى. ',
    '**اذكار  ‏|  **اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ، وَجِلَّهُ، وَأَوَّلَهُ، وَآخِرَهُ، وَعَلَانِيَتَهُ، وَسِرَّهُ. ',
    '**‏اذكار  |  **أستغفر الله .',     
    '**‏اذكار  | **الْلَّهُ أَكْبَرُ',
    '**‏اذكار  |  **لَا إِلَهَ إِلَّا اللَّهُ',
    '**اذكار  |  **اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.',
    '**اذكار  |  **سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ',
    '**اذكار  | **لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ.',
    '**اذكار  | **أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ',
    '**‏اذكار  | **سُبْحـانَ اللهِ وَبِحَمْـدِهِ. ',
    '‏**اذكار**|  لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.',
    '**اذكار  ‏|   **اللَّهُمَّ إِ��ِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.',
    '**اذكار  | ‏ **يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ.',
    'اذكار    |  **أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.**',
    '**‏اذكار  |  **اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.',
    '**‏اذكار  |  **اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. ',
    '**‏اذكار  |  **أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.',
    '**اذكار  |  **يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. ',
    '**اذكار  |  **اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَال��َـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.',
    '**‏اذكار  |  **اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.',
    '**‏اذكار  |  **سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه. ',
    '**‏اذكار  |  **اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.',
    '**‏اذكار  |  **بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. ',
    '**‏اذكار  |  **حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.',
    '**اذكار  |  **اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.',
    '**‏اذكار  |  **اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك',
    '**‏اذكار  |  **رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى ��لله عليه وسلم نَبِيّـاً',
    '**‏اذكار  |  **اللهم إني أعوذ بك من العجز، والكسل، والجبن، والبخل، والهرم، وعذاب القبر، اللهم آت نفسي تقواها، وزكها أنت خير من زكاها. أنت وليها ومولاها. اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يستجاب لها',
    '**‏اذكار  |  **اللهم إني أعوذ بك من شر ما عملت، ومن شر ما لم أعمل',
    '**‏اذكار  |  **اللهم مصرف القلوب صرف قلوبنا على طاعتك',
  ]
  client.on('message', message => {
	  	var prefix = "="
  if (message.author.bot) return;
  if (message.content.startsWith("=اذكار')) {
    if(!message.channel.guild) return;
  var client= new Discord.RichEmbed()
  .setTitle("NoobBot")
  .setThumbnail(message.author.avatarURL)
  .setColor('RANDOM')
  .setDescription(`${adkar[Math.floor(Math.random() * adkar.length)]}`)
                 .setTimestamp()
  message.channel.sendEmbed(client);
  message.react("??")
  }
  });
  

 
  


  const kingmas = [
    '*** منشن الجميع وقل انا اكرهكم. ***',
 '*** اتصل على امك و قول لها انك تحبها :heart:. ***',
    '***     تصل على الوالده  و تقول لها  احب وحده.***',
    '*** تتصل ع��ى شرطي تقول له عندكم مطافي.***',
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
	  	var prefix = "="
  if (message.content.startsWith("=حكم")) {
   var mariam= new Discord.RichEmbed()
   .setTitle("NoobBot")
   .setColor('RANDOM')
   .setDescription(`${kingmas[Math.floor(Math.random() * kingmas.length)]}`)
    message.channel.sendEmbed(mariam);
    message.react(":thinking:")
   }
 });



















const Sra7a = [
            'صراحه  |  صوتك حلوة؟',
            'صراحه  |  التقيت الناس مع وجوهين؟',
            'صراحه  |  شيء وكنت تحقق اللسان؟',
            'صراحه  |  أنا ��خص ضعيف عندما؟',
            'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
            'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
            'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
            'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
            'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
            'صراحه  |  أشجع شيء حلو في حياتك؟',
            'صراحه  |  طريقة جيدة يقنع ��تى لو كانت الفكرة خاطئة" توافق؟',
            'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
            'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
            'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
            'صراحه  |  نظرة و يفسد الصداقة؟',
            'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
            'صراحه  |  شخص معك بالحلوه والمُره؟',
            'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص ��م ترى ذلك ضعف؟',
            'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
            'صراحه  |  وش تتمنى الناس تعرف عليك؟',
            'صراحه  |  ابيع المجرة عشان؟',
            'صراحه  |  أحيانا احس ان الناس ، كمل؟',
            'صراحه  |  مع مين ودك تنام اليوم؟',
            'صراحه  |  صدفة العمر الحلوة هي اني؟',
            'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
            'صراحه  |  صفة تحبها في نفسك؟',
            'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
            'صراحه  |  تصلي صلواتك الخمس كلها؟',
            'صراحه  |  ‏تجامل أحد على راحتك؟',
            'صراحه  |  اشجع شيء سويتة بحياتك؟',
            'صراحه  |  وش ناوي تسوي اليوم؟',
            'صراحه  |  وش شعورك لما تشوف المطر؟',
            'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
            'صراحه  |  ما اكثر شي ندمن عليه؟',
            'صراحه  |  اي الدول تتمنى ان تزورها؟',
            'صراحه  |  متى اخر مره بكيت؟',
            'صراحه  |  تقيم حظك ؟ من عشره؟',
            'صراحه  |  هل تعتقد ان حظك سيئ؟',
            'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
            'صراحه  |  كلمة تود سماعها كل يوم؟',
            'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
            'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
            'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
            'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
            '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
            'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
            '‏صراحه | هل تحب عائلتك ام تكرههم؟',
            '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
            '‏صراحه  |  هل خجلت من نفسك من قبل؟',
            '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
            '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
            '‏صراحه  |  هل تعرضت إلى موقف مُ��رج جعلك تكره صاحبهُ؟',
             '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
            '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
            '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
            'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
            '‏صراحه  |  ما هو عمرك الحقيقي؟',
            '‏صراحه  |  ما اكثر شي ندمن عليه؟',
            'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
       ]
          client.on('message', message => {
			  	var prefix = "="
        if (message.content.startsWith("=صراحه")) {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
         var client= new Discord.RichEmbed()
         .setTitle("NoobBot")
         .setColor('RANDOM')
         .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
         .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                         .setTimestamp()
       
          message.channel.sendEmbed(client);
          message.react("??")
        }
       });
       
       
       const 7mod = [
           "**صورة وجهك او رجلك او خشمك او يدك**.",
           "**اصدر اي صوت يطلبه منك الاعبين**.",
           "**سكر خ��مك و قول كلمة من اختيار الاعبين الي معك**.",
           "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
           "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
           "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
           "**ذي المرة لك لا تعيدها**.",
           "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
           "**صور اي شيء يطلبه منك الاعبين**.",
           "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
           "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
           "**سو مشهد تمثيلي عن مصرية بتولد**.",
           "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
           "**ذي المرة لك لا تعيدها**.",
           "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
           "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
           "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
           "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
           "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
           "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
           "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
           "**اتصل على امك و قول لها انك تحبها :heart:**.",
           "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
           "**قل لواحد ماتعرفه عطني كف**.",
           "**منشن الجميع وقل انا اكرهكم**.",
           "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
           "**روح المطبخ و اكسر صحن او كوب**.",
           "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
           "**قول لاي بنت موجود في الروم كلمة حلوه**.",
           "**تكلم باللغة الانجليزية الين يجي دورك م��ة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
           "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
           "**قول قصيدة **.",
           "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
           "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
           "**اول واحد تشوفه عطه كف**.",
           "**سو مشهد تمثيلي عن اي شيء يطلبه من�� الاعبين**.",
           "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
           "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
           "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
           "**تاخذ عقابين**.",
           "**قول اسم امك افتخر بأسم امك**.",
           "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
           "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
           "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
           "**تتصل على الوالده  و تقول لها خطفت شخص**.",
           "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
           "**����تصل على الوالده  و تقول لها  احب وحده**.",
             "**تتصل على شرطي تقول له عندكم مطافي**.",
             "**خلاص سامحتك**.",
             "** تصيح في الشارع انا  مجنوون**.",
             "** تروح عند شخص تقول له احبك**.",
         
       ]




    


    client.on('message', message => {
			var prefix = "="
      if (message.content.startsWith("=عقاب")) {
                   if(!message.channel.guild) return message.reply('** This command only for servers**');
     var embed = new Discord.RichEmbed()
     .setColor('RANDOM')
      .setThumbnail(message.author.avatarURL) 
    .addField('NoobBot' ,
     `${7mod[Math.floor(Math.random() * 7mod.length)]}`)
     message.channel.sendEmbed(embed);
     console.log('[38ab] Send By: ' + message.author.username)
       }
   });
   
   

   var 7mod = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
       client.on('message', message => {
           var args = message.content.split(" ").slice(1);
       if(message.content.startsWith("=لو خيروك")) {
		   	var prefix = "="
            var cat = new Discord.RichEmbed()
   .setImage(7mod[7mod.floor(7mod.random() * 7mod.length)])
   message.channel.sendEmbed(cat);
       }
   });

   

   
   
   
      var 7mod = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
       client.on('message', message => {
           var args = message.content.split(" ").slice(1);
       if(message.content.startsWith("=لو خيروك")) {
            var cat = new Discord.RichEmbed()
   .setImage(7mod[7mod.floor(7mod.random() * 7mod.length)])
   message.channel.sendEmbed(cat);
       }
   });
   
   
   
   
   
   
   
   
   
client.on('message' , async (message) => {
       if(message.content.startsWith(`=حجر`)) {
              
 let responses = [
        'انا اخترت ورقة وانا فزت',
        'انا اخترت مقص وانا خسرت',
        'انا اخترت حجر وهو تعادل',
    ]
    
    // Fetch a random item from the array
    let fetched = responses[7mod.floor(7mod.random() * responses.length)];
   message.reply(fetched)
       }
  
});






client.on('message' , async (message) => {
       if(message.content.startsWith(`=مقص`)) {
              
 let responses = [
        'انا اخترت ورقة وانا خسرت',
        'انا اخترت مقص وهو تعادل',
        'انا اخترت حجر وانا فزت',
    ]
    
    // Fetch a random item from the array
    let fetched = responses[7mod.floor(7mod.random() * responses.length)];
   message.reply(fetched)
       }
  
});






client.on('message' , async (message) => {
       if(message.content.startsWith(`=ورقة`)) {
              
 let responses = [
        'انا اخترت ورقة وهاذا تعادل',
        'انا اخترت حجر وانا خسرت ',
        'انا اخترت مقص وانا فزت',
    ]
    
    // Fetch a random item from the array
    let fetched = responses[7mod.floor(7mod.random() * responses.length)];
   message.reply(fetched)
       }
  
});





client.login(process.env.BOT_TOKEN);
