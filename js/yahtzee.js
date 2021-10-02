import {
    Dice
} from './dice.js';

class Yahtzee extends Dice {
    constructor(players = 1, amountOfDice = 5) {
        super(amountOfDice);
        this.amountOfPlayers = players;
        this.amountOfDice = amountOfDice;
        this.init();
    }
    init() {
        this.round = 0;
        this.currentPlayer = 1;
        this.throws = 0;
        this.dice = new Dice(this.amountOfDice);
        this.players = [];
        this.scoreCardTemplate = {
            ones: 0,
            twos: 0,
            threes: 0,
            fours: 0,
            fives: 0,
            sixes: 0,
            upperTotal: 0,
            threeOfAKind: false,
            fourOfAKind: false,
            fullHouse: false,
            lowStraight: false,
            highStraight: false,
            yahtzee: false,
            chance: 0,
            yahtzeeBonus: false
        }
        for (let i = 0; i < this.amountOfPlayers; i++) {
            this.players.push({
                id: i,
                scoreCard: this.scoreCardTemplate
            });
        }
        console.log(`Starting new game of Yahtzee with ${this.amountOfPlayers} player${ this.amountOfPlayers > 1 ? 's' : ''}`);
    }
    roll() {
        return this.dice.roll();
    }
    draw(el, data) {
        this.dice.draw(el, data);
    }
    count(arr) {
        return arr.reduce((a, b) => {
            return a + b;
        }, 0);
    }
    reRoll(data, which = [true, true, true, true, true]) {
        data.arr = data;
        data.hex = [];
        for (let i = 0; i < data.arr.length; i++) {
            if (which[i] || which[i] === 1) {
                const el = data.arr[i];
                const roll = this.dice.roll(1);
                data.arr[i] = roll.arr[0];
                data.hex[i] = roll.hex[0];
            }
        }
        return data;
    }
    nextTurn() {
        if (this.currentPlayer === this.amountOfPlayers) {
            this.round++;
            this.currentPlayer = 1;
        } else {
            this.currentPlayer++;
        }
    }
}

export {
    Yahtzee
}