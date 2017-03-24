const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on('message', message => {
  if (message.content == "!خبتيه") {
    message.channel.send("`أحبك بالرضا مره،وبالغيره ألف`", {file: "logo1.png"});
  }
});

bot.on('message', message => {
  if (message.content == "!عز") {
    message.channel.send("الِصدَفة اللُي جابتِك ليَ تسوُى بعِيوني عّمر ،", {file: "https://d.top4top.net/p_4452b8yb1.png"});
  }
});

bot.on('message', message => {
  if (message.content == "!ميم") {
    message.channel.send("حلِفانِي المسَتمد بيني وبيَن ربيّ والله لتخِلّى عنُ قلبيَ واسِتبيعه بالَعدم لًو في يُوم يمِيل لغَيرك ،", {file: "logo2.png"});
  }
});

bot.on('message', message => {
  if (message.content == "!خمو") {
    message.channel.send("‏أريدُ أن تلازمنِي للنهايِة كعقِد بـ عنقِي أو سمِاء تحتِويني ،", {file: "logo5.png"});
  }
});

bot.on('message', message => {
  if (message.content == "!خمو1") {
    message.channel.send("‏أريدُ أن تلازمنِي للنهايِة كعقِد بـ عنقِي أو سمِاء تحتِويني ،", {file: "logo6.png"});
  }
});

bot.on('message', message => {
  if (message.content == "!ساره") {
    message.channel.send("‏‏أنافِي صِْف ﺇلسُكوت ‏لِيِن يذبُل هالشْعَور ،", {file: "logo7.png"});
  }
});

bot.login('MjkzNTk2MjE4NzI5MTY4OTA2.C7JSJg.bCvS_LiLgpNejCLm9h1NpWTEijQ');