
const commando = require('discord.js-commando');

class Addition extends commando.Command {
    constructor(client){
        super(client, {
            name: 'add',
            group: 'discord',
            memberName: 'add',
            description: 'Ajouter i à j'

        });
    }

        async run(message, args){
            var i = args[0];
            var j = args[2];
            var rep = Number(i) + Number(j);
            message.reply(""+i+"+"+j+"="+rep);
            
        }
    
}

module.exports = Addition;