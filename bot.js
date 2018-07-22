const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "=";
client.on('ready', () => {
    console.log('I am ready!');
});


const mepro = [
 '* من تحب اكثر امك او ابك*', '* من تحب اكثر الوجبات سريعة ولا وبجات في بيت *', 'من تحب اكثر اخيك ولا اختك.', '  من تحب اكثر النوم ولا  السهر.', 'من تحب اكثر هاتف فقد انت تمتلكه في عالم او تلفاز ضخم. ', 'من تحب اكثر ميدنتك او اليابان', ' من تحب اكثر ابيك يضربك كف قوي ولا شخص غريب يضربك كف قوي.', 'من تحب اكثر جدك او نانتك. ', 'من تحب اكثر كرة سلة او كرة قدم ', 'من تحب اكثر تشحن هاتفك كل ثلاث ايام ولا بدون انترنت لمدة ثلاث ايام.', '
  .', 'من تحب اكثر تبرمج العاب ولا تبرمج مواقع', ' من تحب اكثر تشتهر بواسطة سوشيال ميديا ولا تشتهر بفضل لعبة البولينغ.*', ' من تحب اكثر تكون ممثل وانت بطل قصة وفلوس قليلة ولا تكون الشخصية شريرة بس فلوس كثيرة.', '*من تحب اكثر كريستيانو ولا ميسي. *', '*من تحب اكثر النوم او تشتغل في الليل والنهار وتربح كثير فلوس.*', '* من تحب اكثر يكون عندك اصدقاء في طفولى وماعندك اصدقاء لمه تكبر او العكس. *', '*  من تحب اكثر تولد بدون يكون عندك فقد يد وحدة ولا تولد عندك رجل وحدة فقد.*', '*من تحب اكثر يكون عمبرك قليل والكل يحبك او عمرك طويل جدا والكل يكرهك. *', '*من تحب اكثر تعيش في اسوأ مكان في عالم وامك موجودة معك ولا تعيش افضل بلد معك بس امك ميتة. *' 
] 
client.on('message', message => {
 var prefix = '-'; 
if (message.content.startsWith(prefix + '=من تحب')){ 
var mariam= new Discord.RichEmbed() 
.setTitle("لعبة من تحب اكثر ..")
 .setColor('RANDOM') 
.setDescription({mepro[Math.floor(Math
.random() * mepro.length)]}) message
.channel.sendEmbed(mariam); message.react("🤔")
 }
 });

client.on('message', function(message) {
	const myID = "الاي دي حقك";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "setname")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "stream")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args , 'https://twitch.tv/6xlez1');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "play")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "listen")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "watch")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setavatar")) {
				        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('اكتب الحالة اللي تريدها.');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});

client.login(process.env.BOT_TOKEN); 
