/* 
    Efficiently combine two already sorted multiset arrays 
    into an array containing the sorted set intersection of the two.

    Output: only the shared values between the two arrays (deduped).

    Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

const numsA4 = [1, 1, 2, 3, 5, 8, 13, 21];
const numsB4 = [1, 3, 5, 7, 9, 11, 13, 15];
const expected4 = [];

/**
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
 function orderedIntersection(sortedA, sortedB) {
    let intersect = [];
    let a = 0;
    let b = 0;
    while ( a < sortedA.length && b < sortedB.length) {
        if ( sortedA[a] < sortedB[b] ) {
            a++;
        } else if ( sortedA[a] > sortedB[b] ) {
            b++;
        } else if ( sortedA[a] == sortedB[b] )  {
            if (sortedA[a] !== intersect[intersect.length-1]) intersect.push(sortedA[a]);
            a++;
            b++;
        }
    }
    return intersect;
}

/*****************************************************************************/

console.log(orderedIntersection(numsA1, numsB1));
console.log(orderedIntersection(numsA2, numsB2));
console.log(orderedIntersection(numsA3, numsB3));
console.log(orderedIntersection(numsA4, numsB4));