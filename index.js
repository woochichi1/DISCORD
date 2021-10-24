const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.tag}에 로그인하였습니다!`);
});

client.on('message', msg => {
  if (msg.content === 'ㅊㅅㅊㅋ') {
    msg.reply('출석체크 완료! 재밌게 즐기십시오!');
  }
});

client.login('OTAxNDQzNTEyNDIyMjQ0Mzgy.YXP8sQ.aBt-fSXLBe7UEusipfcHDxc6BhM');