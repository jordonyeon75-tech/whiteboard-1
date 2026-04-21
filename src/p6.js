/**
 * Problem 6 - Max Character Occurrence
 */

let inputString = "Hello, world!";

function findMaxChar(str) {
    let counts = {}; // Object to store character counts
    let maxChar = '';
    let maxCount = 0;

    // Use for...of to handle Unicode characters correctly (Bonus)
    for (let char of str) {
        // Ignore whitespace and punctuation (only count letters/numbers)
        // We check if it's NOT a space and is an alphanumeric character
        if (char === " " || /[\p{P}]/u.test(char)) {
            continue; 
        }

        // Increase count for this character
        counts[char] = (counts[char] || 0) + 1;

        // Check if this is the new maximum
        if (counts[char] > maxCount) {
            maxCount = counts[char];
            maxChar = char;
        }
    }

    return { char: maxChar, count: maxCount };
}

// Run the code
const result = findMaxChar(inputString);
console.log("Character: '" + result.char + "', Occurrence: " + result.count);
