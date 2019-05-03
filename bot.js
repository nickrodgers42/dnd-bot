/*
*  Simple discord bot for D&D
*/

const Discord = require('discord.js');
const discordToken = require('./discordToken.js');
const help = require('./help.js');

// Creates an instance of a Discord Client
const client = new Discord.Client();

// Log the bot in using the token
client.login(discordToken);

/*
* Tells when the bot is ready to receive commands
*/
client.on('ready', () => {
    console.log('*Hacker voice*: I\'m in');
});

// Listen for messages
client.on('message', message => {
    if (message.content.startsWith('d!')) {
        let fullCommand = message.content.substring(2);
        let splitCommand = fullCommand.split(' ');
        let primaryCommand = splitCommand[0];
        let args = splitCommand.slice(1);

        let diceRegExp = new RegExp(/(r\d*d\d*)(\s*[+-]\s*\d*)?/);
        if (primaryCommand == 'help') {
            if (args.length == 1) {
                message.channel.send(help.general);
            }
            else {
                message.channel.send('Unrecognized arguments to help command');
            }
        }
        else if (diceRegExp.test(primaryCommand)) {
            message.channel.send('You rolled a die');
        }
        else {
            message.channel.send('Command Unrecognized');
        }
    }
}) 
