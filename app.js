/** Q1
 * What does the following code return?

new Set([1,1,2,2,3,4]) // {1,2,3,4}

Answer: {1,2,3,4}, Sets take no duplicates
*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** Q2
 * What does the following code return?

[...new Set("referee")].join("")

Answer: 'ref', We're starting off with creating a set, which removes duplicates values
, but sets only take one value at a time, thus taking each element of it. Then gets joined 
back together as a string. String => Set => Array => String
*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** Q3
 * What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);


Answer: 0: {Array(3) => true}
        1: {Array(3) => false}
*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** Q4
 * Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false
Answer:
 */
function hasDuplicate (arr) {
    return new Set(arr).size !== arr.length; 
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** Q5
 * Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

vowelCount('awesome') // Map(a => 1, e => 2, o => 1)
vowelCount('Colt') // Map(o => 1)
 */

function vowelCount (str) {
    let vowels = 'aeiou';
    const vowelMap = new Map();


    for (let element of str) {
        let lowercasedElement = element.toLowerCase();

        if (vowels.indexOf(lowercasedElement) !== -1) {
            if (vowelMap.has(element)) { // if we already have an element add it
                vowelMap.set(element, vowelMap.get(element) + 1);
            } else {
                vowelMap.set(element, 1);
            }
        }
    }
    return vowelMap;
}
