class ApiService {
    constructor() {
        this.apiProtocol = 'http:';
        this.apiHost = 'dnd5eapi.co/api';
    }
    
    get apiLocation() {
        return `${this.apiProtocol}//${this.apiHost}`;
    }
    
    getSpellList() {
        return `${this.apiLocation}/spells/`;
    }

    getSpell(spellNum) {
        return `${this.apiLocation}/spells/${spellNum}`;
    }
}

const apiService = new ApiService();
module.exports = apiService;
