const spellService = require('./services/spells.service');

class Spells {
    constructor() {}

    searchSpells(searchString) {
        let spellResults = spellService.searchSpells(searchString);
        let resultStr = '';
        if (spellResults.length <= 0) {
            resultStr = 'No spells found for ' + searchString;
        }
        else {
            resultStr += 'Found ' + spellResults.length + ' spells for' + searchString + '\n';
            spellResults.forEach((spell) => {
                resultStr += '`' + spell.number.toString() + '. ' + spell.name + '`\n';
            });
        }
        return resultStr;
    }

    lookupSpell(spellNumber) {

    }
}

const spells = new Spells();
module.exports = spells;
