/* 
* Given by Riot games.
* Rehashes an incorrectly hashed string by combining letter count occurrences
* and alphabetizing them.
*/

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

const str2 = "z1b2a3c4z1b2a3c4";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
    let newHash="";

    let keys = s.split(/\d+/);
    keys.pop();

    let vals = s.split(/[a-z]/i);
    vals.splice(0,1);

    for(let i=0; i<keys.length; i++) {
        for(let j=i+1; j<keys.length; j++) {
            if (keys[i]>keys[j]) {
                [keys[i], keys[j]] =[keys[j], keys[i]];
                [vals[i], vals[j]] =[vals[j], vals[i]];
            }
        }
    }

    i=0;
    j=i+1;
    while(i<keys.length) {
        newHash+=keys[i];
        newSum=parseInt(vals[i]);
        while (keys[i]===keys[j]) {
            newSum+= parseInt(vals[j]);
            j++;
        }
        newHash+=newSum;
        i=j;
        j=i+1;
    }

    return newHash;
}

console.log(rehash(str1));
console.log(rehash(str2));
/*****************************************************************************/