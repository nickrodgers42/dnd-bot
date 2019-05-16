/*
*  Simple discord bot for D&D
*/

const Discord = require('discord.js');
const discordToken = require('./discordToken');
const help = require('./helpMenu');
const Dice = require('./dice');
const Spells = require('./spells');
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

        let diceRegExp = new RegExp(/(r\d+d\d+)(\s*[+-]\s*\d*)?/);
        if (primaryCommand == 'help') {
            if (args.length < 1) {
                message.channel.send(help.general);
            }
            else if (args[0] == "dice") {
                message.channel.send(help.dice);
            }
            else if (args[0] == "spells") {
                message.channel.send(help.spells);
            }
            else {
                message.channel.send('Unrecognized arguments to help command');
            }
        }
        else if (diceRegExp.test(primaryCommand)) {
            message.channel.send(Dice.roll(fullCommand));
        }
        else if (primaryCommand == 'flipCoin') {
            let coin = Math.round(Math.random());
            if (coin == 0) {
                message.channel.send("Tails");
            }
            else {
                message.channel.send("Heads");
            }
        }
        else if (primaryCommand == 'searchSpells' && args.length >= 1) {
            let searchString = fullCommand.substring('searchSpells'.length).trim();
            message.channel.send(Spells.searchSpells(searchString));
        }
        else if (primaryCommand == 'lookupSpell' && args.length == 1) {
            if (args[0].match(/\d*/)[0] == args[0]) {
                let spellNum = parseInt(args[0]);
                Spells.lookupSpell(spellNum).then((results) => {
                    message.channel.send(results.results);
                });
            }
            else {
                message.channel.send('Unrecognized arguments to lookupSpell command');
            }
        }
        else {
            message.channel.send('Command Unrecognized');
        }
    }
}) 
