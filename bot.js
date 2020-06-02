const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "=";
client.on('ready', () => {
    console.log('I am ready!');
});



@bot.command(pass_context=True)
async def report(ctx, member: discord.Member, *, reason: str):
  if member == ctx.message.author:
    await bot.say("????!")
    return
  if member.bot == True:
    await bot.say("????!")
    return
  channel = discord.utils.get(ctx.message.server.channels, name="report-log")
  embed = discord.Embed(title="👌 **New Report**", timestamp=ctx.message.timestamp)
  embed.add_field(name="**➥ Report Details**", value=f"**➥ By: n{ctx.message.author.mention}n➥ Member Reported: n{member.mention}n➥ Reason: n{reason}**", inline=True)
  embed.set_footer(text=f"{member}", icon_url=member.avatar_url)
  embed.set_thumbnail(url=f"https://cdn.discordapp.com/avatars/{member.id}/{member.avatar}.png?size=2048")
  await bot.send_message(channel, embed=embed)

@report.error
async def report_error(error, ctx):
    if isinstance(error, commands.MissingRequiredArgument):
        msg = "-report @member reason"
        await bot.send_message(ctx.message.channel, msg)
    else:
        raise error

	 
	  

client.login(process.env.BOT_TOKEN);
