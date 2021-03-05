// Create by Razzway 
// Bot FiveM Player for Discord + command messages

/////////////////////////////////////////////////////
// VARIABLES
/////////////////////////////////////////////////////

const Discord = require("discord.js");
const client = new Discord.Client();
const configs = require("./configs.json");
const fivereborn = require('fivereborn-query');
client.config = configs;

/////////////////////////////////////////////////////
// DEMARRER LE BOT
/////////////////////////////////////////////////////

client.login(configs.token)
  .then(
    () => {
      console.log("Bot démarré");
      console.log("Collecte d'informations en cours... ");
    },
    () => {
      client.destroy();
      console.log("Bot détruit!");
    });

    client.on('message', msg => {
      if (msg.content === '.seconnecter') {
          msg.delete();
          var embed = new Discord.RichEmbed()
      .setTitle(":star: __**Se-Connecter**__ :star:")
      .addField("**Comment se connecter serveur ?**",
      "**--->** Comment se connecter : `connect cfx.re/join/???`")
      .setFooter("Razzway-Bot", "https://cdn.discordapp.com/attachments/786641550516027442/790534024246460416/SweetyLife_Logo.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/786641550516027442/790534024246460416/SweetyLife_Logo.png")
      .setColor("#024091")
      .setTimestamp()
      msg.channel.send(embed)
   }
  });
  
  client.on('message', msg => {
      if (msg.content === '.status') {
          msg.delete();
          var embed = new Discord.RichEmbed()
      .setTitle(":star: __**Status du serveur**__ :star:")
      .addField("**Voici le Status Serveur**", 
      "**--->** Status Serveur : Ouvert ✔️ `connect cfx.re/join/???`")
      .setFooter("Razzway-Bot", "https://cdn.discordapp.com/attachments/786641550516027442/790534024246460416/SweetyLife_Logo.png")
      .setThumbnail("")
      .setColor("#024091")
      .setTimestamp()
      msg.channel.send(embed)
   }
  });

  client.on('message', msg => {
    if (msg.content === '.reboot') {
        msg.delete();
        var embed = new Discord.RichEmbed()
    .setTitle(":star: __**Status du serveur**__ :star:")
    .addField("**Voici le Status Serveur**", 
    "**--->** Reboot du Serveur : REBOOT ❌ `Merci de ne pas vous co. `")
    .setFooter("", "https://cdn.discordapp.com/attachments/786641550516027442/790534024246460416/SweetyLife_Logo.png")
    .setThumbnail("")
    .setColor("#024091")
    .setTimestamp()
    msg.channel.send(embed)
 }
});

/////////////////////////////////////////////////////
// FONCTION (A NE PAS MODIFIER)
/////////////////////////////////////////////////////

function activity() {
  setTimeout(() => {
    fivereborn.query(configs.serverInfo[0], configs.serverInfo[1], (err, data) => {
      if (err) {
        console.log(err);
      } else {
        client.user.setActivity("" + data.clients + "| Joueurs en ligne.", { type: configs.activityType });
      }
    });
    activity();
  }, 10000);
}
activity();