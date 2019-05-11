# Dungeons and Dragons Discord Chat Bot

* Start bot with `node bot.js` from the command line
* `d!help` for list of commands
* Add bot to your server with [this link](https://discordapp.com/oauth2/authorize?&client_id=573374427543240704&scope=bot&permissions=52224)

## Commands

* `d!r[x]d[y] [modifier]? [advantage | disadvantage]`
  * Roll `x` dice with `y` sides, an optional `modifier` and weather to roll with `advantage` or `disadvantage`
* `d!flipCoin`
  * Flip a coin
* `d!searchSpells [search String]`
  * Search for spells with names containing the `search string`
  * A list of matching spells and their spell numbers will be messaged to the channel
* `d!lookupSpell [spell number]`
  * Retrieve the description for the spell with the matching spell number
  * The spell's description will be messaged to the channel
* `d!help [dice | spells]`
  * `d!help` messages the list of commands to the channel
  * More specific help instructions can be requested with the `dice` or `spells` arguments

## API

* [D&D 5e API](http://www.dnd5eapi.co/)
  * This bot uses the free Dungeons and Dragons 5th edition API found at http://www.dnd5eapi.co/
  * The data requested from this api contains wrongly encoded strings and that is why you may see values like `â€™` in the responses.

Dungeons and Dragons © 1993-2019 Wizards of the Coast LLC, a subsidiary of Hasbro

###### [Old Gregg is watching you](https://youtu.be/4LZo9ugJTWQ)
