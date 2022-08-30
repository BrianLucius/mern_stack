const add = require('./add');
 
describe('add', () => {
    test('correctly returns the sum of two numbers', () => {
        expect(add(2, 2)).toBe(4);
        expect(add(4, 6)).toBe(10); 
        expect(add(-10,-5)).toBe(-15);
    });
});