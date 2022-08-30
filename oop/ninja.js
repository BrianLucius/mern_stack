class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(`Ninja's name is ${this.name}.`);
    }

    showStats() {
        console.log(`Ninja's name is ${this.name}.`);
        console.log(`Strength: ${this.strength}.`);
        console.log(`Speed: ${this.speed}.`);
        console.log(`Health: ${this.health}.`)
    }

    drinkSake() {
        this.health+=10;
    }
}

const ninja = new Ninja("Brian", 75, 85, 100);
ninja.sayName();
ninja.showStats();
ninja.drinkSake();
ninja.showStats();