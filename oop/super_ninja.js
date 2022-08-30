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

class Sensei extends Ninja {
    constructor(name, wisdom=10) {
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
    }
    
    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const ninja = new Ninja("Brian", 8, 7, 100);
ninja.sayName();
ninja.showStats();
ninja.drinkSake();
ninja.showStats();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();