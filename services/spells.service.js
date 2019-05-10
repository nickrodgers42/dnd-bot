let apiService = require('./dnd5eapi.service');
const fetch = require('node-fetch');
const FuzzySearch = require('fuzzy-search');

class SpellService {
    constructor() {
        this.getSpellList().then((results) => {
            this.spells = results.spells;
            console.log('Spells Retrieved');
        })
    }
    
    getSpellList() {
        return new Promise((resolve, reject) => {
            fetch(apiService.getSpellList())
                .then((response) => response.json())
                .then((response) => {
                    let spells = []
                    response.results.forEach((spell) => {
                        spell.number = parseInt(spell.url.substring("http://www.dnd5eapi.co/api/spells/".length));
                        spells.push(spell);
                    })
                    resolve({
                        spells: spells
                    })
                })
                .catch((error) => {console.log(error)});
        });
    }

    getSpell(spellNum) {
        return new Promise((resolve, reject) => {
            fetch(apiService.getSpell(spellNum))
                .then((response) => response.json())
                .then((response) => {
                    resolve({
                        spell: response
                    })
                })
                .catch((error) => { console.log(error); })
        })
    }

    searchSpells(searchString) {
        const searcher = new FuzzySearch(this.spells, ['name'], {sort: true});
        return searcher.search(searchString);
    }

    getNumSpells() {
        return this.spells.length;
    }
}

const spellService = new SpellService();
module.exports = spellService;
