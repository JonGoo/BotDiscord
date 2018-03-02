
const commando = require('discord.js-commando');

class Tell extends commando.Command {
    constructor(client){
        super(client, {
            name: 'tell',
            group: 'discord',
            memberName: 'tell',
            description: 'Dis-moi quelque chose'

        });
    }

    async run(message, args){
        var roll = Math.floor(Math.random()*5)+1;
        switch(roll) {
            case 1: message.reply('Bienvenue à tous, bienvenue à toi c\'est WarenTV !');
                    break;
            case 2: message.reply('Salut tout le monde, c\'est Fuze');
            break;
            case 3: message.reply('Salut tout le monde, c\'est Soristos, j\'espère que vous allez bien !');
            break;
            case 4: message.reply('Eeeeeet bien salut à tous les amis, c\'est Tom (Imot3k), on se retrouve pour une nouvelle vidéo !');
            break;
            case 5: message.reply('Eeeet bien salut à toutes et à tous c\'est PiliFirst, j\'espère que vous allez tous très bien');
            break;
            //default: message.reply();
        }
    }
    
}

module.exports = Tell;