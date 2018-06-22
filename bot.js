const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`You need help ? | $help | By AlGad7ًں‘‘ `,'https://www.twitch.tv/v5bz');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});
client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('ظ…ط´ ظ‡ظ‚ظˆظ„ظƒ!');
  }
});
if (message.content === '$help') {
              var embed  = new Discord.RichEmbed()
                .addField("**LINKS**" ,":no_entry_sign: طھظ… ط§ط¶ط§ظپظ‡ ظ…ظ†ط¹ ط§ظ„ط±ظˆط§ط¨ط· :no_entry_sign: ")
                .addField("broadcast (bc)" ,"**ط§ظ„ط§ط³طھط®ط¯ط§ظ…:** ``$broadcast <ط§ظ„ط±ط³ط§ظ„ظ‡> , $bc <ط§ظ„ط±ط³ط§ظ„ظ‡>``")
                .addField("**BAN**" ,"**ط§ظ„ط§ط³طھط®ط¯ط§ظ…:** ``$ban <ط§ظ„ظ…ط³طھط®ط¯ظ…>``")
                .addField("**KICK**" ,"**ط§ظ„ط§ط³طھط®ط¯ط§ظ…:** ``$kick <ط§ظ„ظ…ط³طھط®ط¯ظ…> ``")
                .addField("**ظگAVATAR**" ,"**ط§ظ„ط§ط³طھط®ط¯ط§ظ…:** ``$avatar``")
                .addField("**INFO**", "**ط§ظ„ط£ط³طھط®ط¯ط§ظ… :** ``$info``")
                .addField("**SAY**" ,"**ط§ظ„ط§ط³طھط®ط¯ط§ظ…:** ``$say <ط§ظ„ط±ط³ط§ظ„ظ‡>``")
                .addField("**ID**" ,"**ط§ظ„ï؟½ï؟½ط³طھط®ط¯ط§ظ…:** ``$id``")
                .addField("**SERVER**" ,"**ط§ظ„ط§ط³طھط®ط¯ط§ظ…:** ``$server``")
                .addField("**INVITE**" ,"**ط§ظ„ط§ط³طھط®ط¯ط§ظ…:** ``$invite <ظ„ط£ط¶ط§ظپظ‡ ط§ظ„ط¨ظˆطھ ظ„ط£ظ‰ ط³ظٹط±ظپط±>``")
                .addField("**SUPPORT**" ,"**ط§ظ„ط§ط³طھط®ط¯ط§ظ…:** ``$suppport <ط³ظٹط±ظپط± ط¯ط¹ظ… ط§ظ„ظپظ†ظ‰>``")
                .addField("**QA**" ,"**ط§ظ„ط§ط³طھط®ط¯ط§ظ…:** ``$qa <ط§ظ„ط³ط¤ط§ظ„>``  ")
                .addField("**CLEAR**" ,"**ط§ظ„ط§ط³طھط®ط¯ط§ظ…:** ``$clear <ط§ظ„ط¹ط¯ط¯>``")
                .addField("**PING**", "**ط§ظ„ط£ط³طھط®ط¯ط§ظ…:** ``$ping``")
                .addField("**SERVERNAME**", "**ط§ظ„ط£ط³طھط®ط¯ط§ظ…:** ``$servername``")
                .addField("**CUT_TWEET**", "**ط§ظ„ط§ط³طھط®ط¯ط§ظ…** ``$ct``")
                .addField("**TWEET**", "**ط§ظ„ط§ط³طھط®ط¯ط§ظ…** ``$tweet <ط§ظ„ط±ط³ط§ظ„ظ‡>``")
                .addField("**NO INVITE LINKE**","طھظ… ط§ط¶ط§ظپط© ط®ط§طµظٹط© ظ…ظ†ط¹ ط§ظ„ط§ظ†ظپظٹطھط§طھ ")
                .addField("**LOGIN**" , " طھظ… ط§ط¶ط§ظپط© ط®ط§طµظٹط© ط§ظ„طھظپط¹ظٹظ„ ظ„ط·ظ„ط¨ طھط´ط؛ظٹظ„ظ‡ط§ ظپظٹ ط§ظ„ط³ظٹط±ظپط± ظƒظ„ظ… ط§ظ„ظ…ط¨ظٹط±ظ…ط¬ظٹظ† ")
                .setColor('RANDOM')
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
client.on('message', message => {
  if(message.content === ('clear')) {
  let modRole = message.guild.roles.find("name", "Admin");
  if (!modRole) return message.reply('You do not have Admin Role'); {
    }
  const params = message.content.split(" ").slice(1)
    let messagecount = parseInt(params[0]);
    message.channel.fetchMessages({limit: messagecount})
        .then(messages => message.channel.bulkDelete(messages));
  }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** No Invite Links :angry: ! **`)
    }
});
client.on('message', msg => {
  if (msg.content === '$invite') {
    msg.reply('link');
  }
});
client.on('message', msg => {
  if (msg.content === '$help') {
    msg.reply(':envelope: | *AlGad7* طھظ… ط§ط±ط³ط§ظ„ ط§ظ„ط±ط³ط§ظ„ظ‡ ظپظٹ ط§ظ„ط®ط§طµ');
  }
});
client.on("message", message => {
    var prefix = "$";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('âڑ  | **ظ„ظٹط³ ظ„ط¯ظٹظƒ طµظ„ط§ط­ظٹط§طھ**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | طھظ€ظ€ظ…",
        color: 0x06DF00,
        description: "طھظ… ظ…ط³ط­ ط§ظ„ط±ط³ط§ط¦ظ„ ط¨ظ†ط¬ط§ط­",
        footer: {
          text: "Name Bot."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
// Your Avatar URL!
client.on('message', message => {
    if (message.content === "$Avatar") {
    message.reply(message.author.avatarURL); 
    }
});
client.on('message', msg => {
  if (msg.content === '$suppport') {
    msg.reply('ط§ظ„ط³ظٹط±ظپط± ظ„ظ„ظ…ط³ط§ط¹ط¯ظ‡,https://discord.gg/qgwFZx');
  }
});
client.on("message", message => {
      if (message.content === "$ping") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('**Ping:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});
    client.on('message', message => {
     if (message.content === "$id") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
.setDescription("ظ…ط¹ظ„ظˆظ…ط§طھ ط¹ظ† ط§ظ„ط­ظ€ظ€ط³ط§ط¨")
               .setFooter(`Name Bot.`, '')
  .setColor("#9B59B6")
  .addField("ط§ط³ظ€ظ€ظ€ظ… ط§ظ„ط­ط³ظ€ظ€ط§ط¨", `${message.author.username}`)
  .addField('ظƒظˆط¯ ط§ظ„ط­ط³ط§ط¨ ط§ظ„ط®ط§طµ', message.author.discriminator)
  .addField("ط§ظ„ط±ظ‚ظ€ظ€ظ€ظ… ط§ظ„ط´ظ€ظ€ظ€ط®طµظٹ", message.author.id)
  .addField('ط¨ظ€ظ€ظ€ظ€ظˆطھ', message.author.bot)
  .addField("طھط§ط±ظٹط® ط§ظ„طھط³ط¬ظٹظ„", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});
var prefix = "$";
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
  }
});
client.on("guildMemberRemove", member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage("", {embed: {
  color: 808080,
  author: {
    name: member.user.username,
    icon_url: member.user.avatarURL
  },
  title: guild.name,
  description: ' Bye ..',
}}).catch(console.error);
  }
);
client.on("message", (message) => {
    if (message.content.startsWith("*ban ")) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('âڑ  ظ…ط§ط¹ظ†ط¯ظƒ ظ„ط§ طھظ…ظ„ظƒ ');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(member.displayName + " ظ„ظ‚ط¯ طھظ… ط·ط±ط¯ظ‡ ط¨ظ†ط¬ط§ط­ :wave: ");
        }).catch(() => {
            message.channel.send(":x: ظ‡ظ†ط§ظƒ ط®ط·ط§ط، ط­ط§ظˆظ„ ظ…ط±ظ‡ ط£ط®ط±ظ‰:x: ");
        });
    }
});
client.login("NDU5Mjc2MTk5MjY1NTY2NzIw.Dg42RA.bAp0AL9do6t4QRrFaxg-ti8tzZo");
