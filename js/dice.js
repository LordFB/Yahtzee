class Dice {
    constructor(count) {
        this.diceToRoll = count;
    }
    roll() {
        let output = [];
        let hex = [];
        for (let i = 0; i < this.diceToRoll; i++) {
            let rnd = Math.floor(Math.random() * 5);
            output.push(rnd + 1);
            hex.push(`&#x268${rnd};`);
        }

        return {
            arr: output,
            hex
        };
    }
    draw(el, data) {
        el.innerHTML = "";
        for (const d of data) {
            el.innerHTML += d;
        }
    }
}
export {
    Dice
}