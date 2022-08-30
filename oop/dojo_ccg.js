class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.resilience = resilience;
        this.power = power;
    }

    attack(target) {
        console.log(`\n${this.name} attacks ${target.name} reducing resilience by ${this.power}`);
        target.resilience-=this.power;
    }

    showStats() {
        console.log(`---------- ${this.name} ----------`);
        console.log(`Resilience: ${this.resilience}`);
        console.log(`Power: ${this.power}`);
        console.log('--------------------------------------');
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        if (target instanceof Unit) {
            console.log(`\nPlaying ${this.name}: ${this.text} on ${target.name}`);
            switch(this.stat) {
                case "resilience":
                    target.resilience+=this.magnitude;
                    break;
                case "power":
                    target.power+=this.magnitude;
                    break;
            }
        } else {
            throw new Error ("Target must be a unit!");
        }
    }

    showEffect() {
        console.log(`---------- ${this.name} ----------`);
        console.log(`Cost: ${this.cost}`);
        console.log(`Text: ${this.text}`);
        console.log('-------------------------------------------------');
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const hardAlgorithm = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", 3);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2.", "resilience", -2);
const pairProgramming = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", 2);

redBeltNinja.showStats();
hardAlgorithm.showEffect();

hardAlgorithm.play(redBeltNinja);
redBeltNinja.showStats();

unhandledPromiseRejection.play(redBeltNinja);
redBeltNinja.showStats();

pairProgramming.play(redBeltNinja);
redBeltNinja.showStats();

blackBeltNinja.showStats();
redBeltNinja.attack(blackBeltNinja);
blackBeltNinja.showStats();
