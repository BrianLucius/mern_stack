class Athlete {
    constructor(name, country, sport) {
        this.name = name;
        this.country = country;
        this.sport = sport;
        this.awards = 0;
        this.energyLevel = 100;
        this.salary = 10000;
    }

    sayName() {
        console.log("Hi, my name is " + this.name);
    }

    displayStats() {
        console.log(`${this.name}'s energy level is ${this.energyLevel} and they have ${this.awards} awards.`);
    }

    playSport() {
        this.energyLevel-=75;
    }

    takeIceBath() {
        this.energyLevel=100;
    }
}

const athlete = new Athlete("Brittany", "USA", "Singer");
athlete.sayName();
athlete.playSport();
athlete.displayStats();
athlete.takeIceBath();
athlete.displayStats();

class Swimmer extends Athlete {
    constructor(name, country, lapSpeed) {
        super(name, country, "Swimming")
        this.lapSpeed = lapSpeed;
    }

    swim() {
        console.log("Splasssh, I'm swimming");
        this.energyLevel-=10;
    }
}

let swimmer = new Swimmer("Phelps", "USA", 9);
swimmer.swim();
swimmer.displayStats();

// ----- Call back functions

const makingPurchase = (person, price) => {
    console.log(`Processing purchase for ${person}, charged ${price}`);
}

const returningItem = (person, price) => {
    console.log(`Processing refund for ${person}, ${price} will be issued to ${person}`);
}

const parentFunction = (callback, person, price) => {
    console.log(`Welcome to the jungle ${person}`);
    callback(person, price);
}

parentFunction(makingPurchase, "David", 1000);
parentFunction(returningItem, "David", 1000);