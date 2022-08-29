class Developer {
    
    constructor(name, health = 100, briancell = 1) {
        this.name = name
        this.languages = ["Python", "MERN", "Java", "C#"]
        this.health = health
        this.briancell = briancell
    }

    sleep() {
        console.log("Zzzzzzzz.....");
        this.briancell+=5;
        this.health+=10;
        return this;
    }

    completeProject(title) {
        console.log(`${this.name} completed a project named ${title}`);
        this.health-=15;
        this.briancell+=2;
        return this;
    }
}

const dev1 = new Developer("Brian");
console.log(dev1);
dev1.sleep();
console.log(dev1);
dev1.completeProject("BigProject");
console.log(dev1);