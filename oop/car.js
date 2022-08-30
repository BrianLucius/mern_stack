class Vehicle {
    constructor(manufacturer, model, color) {
        this.miles = 0;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
    }

    drive() {
        this.miles+=10;
        console.log(`You drove your ${this.constructor.name} and it now has ${this.miles} miles on it.`);
    }

    parentFunction() {
        return "This is coming from the parent!";
    }
}

class M5 extends Vehicle {
    constructor(color) {
        super("BMW","M5", color);
        this.hp=616;
    }

    printSpecSummary() {
        console.log(`${this.color} BMW M5 with a 4.4L V8 Twin Turbo engine packing ${this.hp}HP and 553 lb-ft torque`);
    }

    childFunction() {
        const message = super.parentFunction();
        console.log(message);
    }
}

const car = new Vehicle("BMW", "M5", "blue");
car.drive();
console.log("Miles: ",car.miles);

const newCar = new M5("Red");
newCar.printSpecSummary();
newCar.drive();
newCar.drive();
newCar.childFunction();
