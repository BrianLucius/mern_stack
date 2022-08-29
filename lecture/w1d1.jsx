// Javascript -- web vs node

// ECMA

// -- Hoisting
console.log(cat);
var cat = "Boots";
console.log(cat);

// -- Const & Let
for (let i=0; i<10; i++ )
    console.log(i);

const skills = ["debugging", "sleeping", "making coffee"];
skills.push("tetris");
console.log(skills);

// -- Scope
let myName = "Brian";
function changeName() {
    let myName = "Boots";
    myName = "Petey";
    console.log(myName);
}
console.log(myName);
changeName();
console.log(myName);

// -- destructuring
const post = {
    title: "First day in MERN",
    viewers: 1000,
    likes: 500,
    description: "An awesome day with MERN. It works",
    hastags: ["excellent","great","fun"],
}
console.log(post.title);
const {title: newTitle} = post;
console.log(newTitle);

// rest / spread
const trips = ["japan", "spain", "france", "norway"];
console.log(trips);
const tripsCopy = [...trips];
tripsCopy.push("Costa Rica");
console.log(tripsCopy);
console.log(trips);

const bigTrip = [...trips, ...tripsCopy, "Australia"]
console.log(bigTrip);

// --- arrow functions
function printHello() {
    console.log("hello");
}
printHello();

const printHello2 = () => console.log("hello ES6");
printHello2();

function changePrice(price, discount) {
    return price * discount;
}
console.log(changePrice(100, 0.9));

const changePrice = (price, discount) => {
    return price * discount;
}
console.log(changePrice(100, 0.9));

const changePrice3 = (price, discount) => price * discount;
console.log(changePrice3(100, 0.9));

// --- ternary operators
const rating = 8;
if (rating > 7) {
    console.log("Yes I'm great");
} else {
    console.log("No I'm not great");
}

(rating > 7) ? console.log("I'm great") : console.log("I'm not");


