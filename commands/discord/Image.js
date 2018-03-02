
const commando = require('discord.js-commando');

class Image extends commando.Command {
    constructor(client){
        super(client, {
            name: 'img',
            group: 'discord',
            memberName: 'img',
            description: 'show image'

        });
    }

        async run(message, args){
            message.channel.send("test", {
                files: [
                    "img/test.png"
                ]
            });
        }
    
}

module.exports = Image;