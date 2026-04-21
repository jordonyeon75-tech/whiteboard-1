// Problem 7 - Square Root
let x = 25; 

function findSquareRoot(num) {
    // 0 is a special case
    if (num === 0) return 0;

    // Start from 1 and go up
    for (let i = 1; i <= num; i++) {
        // If i * i equals our number, we found the square root!
        if (i * i === num) {
            return i;
        }
    }
    return -1; // Should not happen based on problem rules
}

let result = findSquareRoot(x);
console.log("Input: " + x);
console.log("Square Root: " + result);
