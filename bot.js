const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'NTQyNDQxMDMwMTg4OTI0OTc4.DzuDRQ.Crt4KawlMe7vGtvYX74l7y8UzWo'

bot.on('message', function(message){
    if(message.content == 'Hallo')
    {
        message.reply('Hallo, :) Willkommen auf dem Obvision Discord Server!');
    }
});

bot.on('ready' ,function(){
    console.log("Ready");
})



    bot.login(TOKEN);
