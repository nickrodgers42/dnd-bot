let help = {
    general: "",
    dice: "",
    spells: "",
}

help.general += "`d!r[x]d[y] [modifier]? [advantage | disadvantage]?`\n";
help.general += "\tRoll `x` dice with `y` sides, optional `modifier` (ex. `+ 5`, `-3`), optional `advantage`/`disadvantage`\n";
help.general += "`d!searchSpells [search string]`\n";
help.general += "\tLook for spells with names containing the `search string`\n";
help.general += "`d!lookupSpell [spell number]`\n";
help.general += "\tRetrieves the spell with the matching `spell number`\n";
help.general += "`d!flipCoin`\n";
help.general += "\tFlip a coin\n";
help.general += "`d!help`\n";
help.general += "\tList available commands\n";

help.dice += "*Full Command:* `d!r[x]d[y] [modifier]? [advantage | disadvantage]?`\n"
help.dice += "`d!r[x]d[y]\n`";
help.dice +="\tRoll `x` dice with `y` sides\n";
help.dice += "`[modifier]?`\n";
help.dice += "\tAn optional modifier to be added to the total sum of the dice\n";
help.dice += "\tHandles values in the range -100 to 100\n";
help.dice += "`[advantage | disadvantage]?`\n";
help.dice += "\tWhether to roll the dice with `advantage` or `disadvantage`\n";

help.spells += "`d!searchSpells [search string]`\n";
help.spells += "\tLook for spells with names containing the `search string`\n";
help.spells += "\tReturns a list of spells and their spell numbers\n";
help.spells += "`d!lookupSpell [spell number]\n";
help.spells += "\tRetrieves the spell with the matching `spell number`\n";
help.spells += "\tReturns the spell's description";

module.exports = help;
