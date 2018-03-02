
const commando = require('discord.js-commando');
var clientT;
class join extends commando.Command {
    constructor(client){
        super(client, {
            name: 'join',
            group: 'sound',
            memberName: 'join',
            description: 'join le channel vocal'

        });
        clientT = client;
    }

        async run(message, args){
            if (message.member.voiceChannel) {
                const connection = await message.member.voiceChannel.join();
              } else {
                message.reply('You need to join a voice channel first!');
              }
        }
    
}

module.exports = join;