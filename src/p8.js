/**
 * Problem 8 - Anagram Checker
 */

function isAnagram(str1, str2) {
    // Helper to clean and count characters in a string
    function getCharCounts(text) {
        let counts = {};
        let length = 0;
        
        for (let char of text.toLowerCase()) {
            // Only count letters a-z (ignores spaces and punctuation)
            if (char >= 'a' && char <= 'z') {
                counts[char] = (counts[char] || 0) + 1;
                length++;
            }
        }
        return { counts, length };
    }

    const data1 = getCharCounts(str1);
    const data2 = getCharCounts(str2);

    // If they don't have the same number of valid letters, they aren't anagrams
    if (data1.length !== data2.length) {
        return false;
    }

    // Check if every character count matches
    for (let char in data1.counts) {
        if (data1.counts[char] !== data2.counts[char]) {
            return false;
        }
    }

    return true;
}

// --- TESTING THE EXAMPLES ---
console.log("Example 1 (listen, silent):", isAnagram("listen", "silent")); // true
console.log("Example 2 (debit card, Bad credit):", isAnagram("debit card", "Bad credit")); // true
console.log("Example 4 (restful, fluster):", isAnagram("restful", "fluster")); // false (based on count rule)
console.log("Example 6 (Conversation, Voices, rant on):", isAnagram("Conversation", "Voices, rant on")); // true
