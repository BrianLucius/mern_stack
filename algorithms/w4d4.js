// https://leetcode.com/problems/compare-version-numbers/

/*

Given two strings, version1, and version2, both representing version numbers
If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.

Helpful methods:
    - .split(characterToSplitOn) - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
    - .parseInt - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails

Bonus, solve without .split

*/

const test1V1 = "0.1";
const test1V2 = "1.1";

const expected1 = -1;

const test2V1 = "1.0.1";
const test2V2 = "1";
const expected2 = 1;

const test3V1 = "7.5.2.4";
const test3V2 = "7.5.3";
const expected3 = -1;

const test4V1 = "7.5.2.4";
const test4V2 = "7.5.2";
const expected4 = 1;

const test5V1 = "1.01";
const test5V2 = "1.001";
const expected5 = 0;
// Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

const test6V1 = "1.0.1";
const test6V2 = "1";
const expected6 = 1;

// This edge case fails testing
const test7V1 = "1.0.0";
const test7V2 = "1.0";
const expected7 = 0;

/**
 * Determines which version number is greater or if they are equal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} v1
 * @param {string} v2
 * @returns {number} 1 if v1 greater, -1 if v1 smaller, 0 if equal.
 */
function compareVersionNumbers(v1, v2) {
    ver1=v1.split('.');
    ver2=v2.split('.');
    let eval=0;
    let position=0;

    while( eval === 0 && !(position === ver1.length-1 && position === ver2.length-1)) {
        if ((parseInt(ver1[position]) > parseInt(ver2[position])) || position === ver2.length) {
            eval = 1;
        } else
        if ((parseInt(ver1[position]) < parseInt(ver2[position])) || position === ver1.length) {
            eval = -1;
        } else {
            position++;
        }
    }

    return eval;

}

// console.log("Expected: ", expected1, " Returned: ", compareVersionNumbers(test1V1, test1V2));
console.log("Expected: ", expected2, " Returned: ", compareVersionNumbers(test2V1, test2V2));
console.log("Expected: ", expected3, " Returned: ", compareVersionNumbers(test3V1, test3V2));
console.log("Expected: ", expected4, " Returned: ", compareVersionNumbers(test4V1, test4V2));
console.log("Expected: ", expected5, " Returned: ", compareVersionNumbers(test5V1, test5V2));
console.log("Expected: ", expected6, " Returned: ", compareVersionNumbers(test6V1, test6V2));
console.log("Expected: ", expected7, " Returned: ", compareVersionNumbers(test7V1, test7V2));
/*****************************************************************************/