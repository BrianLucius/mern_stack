/* 
Given two strings, return true if the first string can be built from the letters in the 2nd string
Ignore case .indexOf will only tell you if the letter is found one time
*/

const strA1 = "Hello World";
const strB1 = "lloeh wordl";
const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.

/**
 * Determines whether s1 can be built using the chars of s2.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */

function histogram(str) {
    let strArray = str.split("");
    let histogram = {}
    strArray.map(letter => histogram[letter.toLowerCase()] = (histogram.hasOwnProperty(letter.toLowerCase()) ? histogram[letter.toLowerCase()]+=1 : 1));
    return histogram;
}

function canBuildS1FromS2(s1, s2) {
    const histS1 = histogram(s1);
    const histS2 = histogram(s2);
    let enoughLetters = true;
    for (const [key, val] of Object.entries(histS1)) {
        if (histS2[key] >= val) {
            enoughLetters = true;
        } else {
            return false;
        }
    }
    return enoughLetters;
}

console.log("Expected: ", expected1, " Received: ", canBuildS1FromS2(strA1, strB1));
console.log("Expected: ", expected2, " Received: ", canBuildS1FromS2(strA2, strB2));
console.log("Expected: ", expected3, " Received: ", canBuildS1FromS2(strA3, strB3));
console.log("Expected: ", expected4, " Received: ", canBuildS1FromS2(strA4, strB4));
console.log("Expected: ", expected5, " Received: ", canBuildS1FromS2(strA5, strB5));
/*****************************************************************************/
