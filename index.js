const Discord = require('discord.js');
const commando = require('discord.js-commando');

const client = new commando.Client();
client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find('name', 'member-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Bienvenue dans sur le discord de la PinkyDream, ${member}`);
  });

client.registry.registerGroup('random', 'Random');
client.registry.registerGroup('discord', 'Discord');
client.registry.registerGroup('sound', 'Sound');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");;

client.login('MzY1NDYyNzQxOTQ4OTU2Njcy.DO8vwQ.GSqBl1zf-wm-jRpZ3aeer0Ndalw');