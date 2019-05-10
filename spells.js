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
            resultStr += 'Found ' + spellResults.length + ' spells for ' + searchString + '\n';
            spellResults.forEach((spell) => {
                resultStr += '`' + spell.number.toString() + '. ' + spell.name + '`\n';
            });
        }
        return resultStr;
    }

    lookupSpell(spellNumber) {
        return new Promise((resolve, reject) => {
            let resultStr = '';
            let numSpells = spellService.getNumSpells();
            if (spellNumber >  numSpells || spellNumber < 1) {
                resultStr += 'Invalid spell number\n'
                resultStr += 'Please choose a number between 1 and ' + numSpells;
                resolve({
                    results: resultStr
                })
            }
            else {
                spellService.getSpell(spellNumber).then((results) => {
                    let spell = results.spell;
                    resultStr += '__**' + spell.name.toUpperCase() + '**__\n';
                    resultStr += '*Level ' + spell.level + ' ' + spell.school.name + '*\n\n'
                    resultStr += '**Range:** ' + spell.range + '\n';
                    resultStr += '**Casting Time:** ' +  spell.casting_time + '\n';
                    resultStr += '**Components:** ';
                    spell.components.forEach((component) => {
                        resultStr += component + ' ';
                    })
                    if (spell.hasOwnProperty('material')) {
                        resultStr += '(' + spell.material + ')';
                    }
                    resultStr += '\n';
                    resultStr += '**Duration:** ' + spell.duration + '\n';
                    resultStr += '**Concentration:** ' + spell.concentration + '\n';
                    resultStr += '**Classes:** ';
                    spell.classes.forEach((c) => {
                        resultStr += c.name + ' ';
                    })
                    resultStr += '\n';
                    resultStr += '**Subclasses:** ';
                    spell.subclasses.forEach((subclass) => {
                        resultStr += subclass.name + ' ';
                    })
                    resultStr += '\n';
                    spell.desc.forEach((string) => {
                        resultStr += '\t' + string + '\n';
                    })
                    if (spell.hasOwnProperty('higher_level')) {
                        resultStr += '**At Higher Levels**:\n';
                        spell.higher_level.forEach((string) => {
                            resultStr += '\t' + string + '\n';
                        })
                    }
                    resolve({
                        results: resultStr
                    })
                });
            }
        });
    }
}

const spells = new Spells();
module.exports = spells;
