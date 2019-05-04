class Dice {
    constructor() {

    }

    rollDice(numDice, dieSize, modifier) {
        let result = {
            rolls: [],
            total: 0
        }
        for (let i = 0; i < numDice; ++i) {
            let roll = Math.floor(Math.random() * dieSize + 1);
            result.rolls.push(roll);
            result.total += roll;
        }
        result.total += modifier;
        return result;
    }

    rollDisadvantage(numDice, dieSize, modifier) {
        let roll1 = this.rollDice(numDice, dieSize, modifier);
        let roll2 = this.rollDice(numDice, dieSize, modifier);
        let resultStr = ""
        resultStr += this.formatResult(roll1);
        resultStr += "\nAnd "
        resultStr += this.formatResult(roll2);
        resultStr += "\nYour total with disadvantage is "
        if (roll1.total > roll2.total) {
            resultStr += roll2.total.toString();
        }
        else {
            resultStr += roll1.total.toString();
        } 
        return resultStr;
    }

    rollAdvantage(numDice, dieSize, modifier) {
        let roll1 = this.rollDice(numDice, dieSize, modifier);
        let roll2 = this.rollDice(numDice, dieSize, modifier);
        let resultStr = ""
        resultStr += this.formatResult(roll1);
        resultStr += "\nAnd "
        resultStr += this.formatResult(roll2);
        resultStr += "\nYour total with advantage is "
        if (roll1.total < roll2.total) {
            resultStr += roll2.total.toString();
        }
        else {
            resultStr += roll1.total.toString();
        }
        return resultStr;
    }

    formatResult(roll) {
        let resultStr = "You rolled a ";
        if (roll.rolls.length > 1) {
            for (let i = 0; i < roll.rolls.length - 1; ++i) {
                resultStr += roll.rolls[i].toString() + ", ";
            }
            resultStr += "and a " + roll.rolls[roll.rolls.length - 1];
            resultStr += " for a total of " + roll.total.toString();
        }
        else {
            resultStr += roll.rolls[0].toString();
        }
        return resultStr;
    }

    roll(roll) {
        let diceRegExp = new RegExp(/(r\d+d\d+)(\s*[+-]\s*\d*)?/);
        if (diceRegExp.test(roll)) {
            let numDice = parseInt(roll.match(/r\d+/)[0].substring(1));
            let dieSize = parseInt(roll.match(/d\d+/)[0].substring(1));
            let modifierStr = diceRegExp.exec(roll)[0];
            modifierStr = modifierStr.match(/[+-]\s*\d*/);
            let modifier = 0;
            if (modifierStr != null) {
                modifierStr = modifierStr[0].replace(/\s+/g, '');
                if (modifierStr.substring(0, 1) == '+') {
                    modifier = parseInt(modifierStr.substring(1));
                }
                else {
                    modifier = parseInt(modifierStr);
                }
            }
            let resultStr = '';
            if (numDice > 10) {
                resultStr = "I can only roll up to 10 dice at a time!";
            }
            else if (dieSize > 100) {
                resultStr = "I can only roll up to a d100!";
            }
            else if (numDice < 1 || dieSize < 1) {
                resultStr = "I don't understand";
            }
            else if (roll.match(/(disadvantage)/) != null) {
                resultStr = this.rollDisadvantage(numDice, dieSize, modifier);
            }
            else if (roll.match(/(advantage)/) != null) {
                resultStr = this.rollAdvantage(numDice, dieSize, modifier);
            }
            else {
                resultStr = this.formatResult(this.rollDice(numDice, dieSize, modifier));
            }
            return resultStr;
        }
    }
}

let dice = new Dice();
module.exports = dice;
