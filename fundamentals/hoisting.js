// GIVEN
console.log(example);
var example = "I'm the example!";

// AFTER HOISTING BY THE INTERPRETER
var example;
console.log(example); // logs undefined
example = "I'm the example!";

console.log(example);
let example = "I'm the example!";  

// 1.
console.log(hello);                                   
var hello = 'world';  

var hello;
console.log(hello);
hello='world';
// Output: undefined

// 2.
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

var needle = 'haystack';
function test() {
    var needle = 'magnet';
    console.log(needle);
}
test();

// Output: magnet

// 3.
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// Output: super cool

4.
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

var food = 'chicken';
function eat() {
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
console.log(food);
eat();

// Output: chicken
//         half-chicken

// 5.
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

mean();
var mean;
mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);
console.log(food);

// Output: mean isn't a function


// 6.
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

var genre;
console.log(genre);
genre="disco";
function rewind(){
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
rewind();
console.log(genre);

// Output: undefined
//         rock
//         r&b
//         disco


// 7.
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

var dojo
dojo = "san jose";
console.log(dojo);
function learn() {
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
learn();
console.log(dojo);

// Output: san jose
//         seattle
//         burbank
//         san jose



// 8.
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

// Output: {"name": "Chicago", "students": 65, "hiring": true}
//         error: can't assign constant