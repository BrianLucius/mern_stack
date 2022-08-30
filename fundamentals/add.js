const assert = require('assert');

function add(num1, num2) {
    return num1 + num2;
}
module.exports = add;

assert.strictEqual(add(2, 2), 4);
assert.strictEqual(add(4, 6), 10);

console.log(add(1,2));