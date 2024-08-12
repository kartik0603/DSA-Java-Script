// Longest Palindromic Substring of Size K  ,    js code
// Problem Description
// Given a string, find the longest palindromic substring with a length of at least `k`.
// Input Format
// 1. A string `s`.  
// 2. An integer `k` representing the minimum length of the palindromic substring.

// Output Format
// Print the longest palindromic substring with a length of at least `k`.
// Sample Input 

// s = babad
// k = 3


// Sample Output
// bab


const  longePalSubstring=(s, k)=> {
    if (s.length < k) return '';

    let longest = '';

    const isPalindrome= (start, end)=> {
        while (start < end) {
            if (s[start] !== s[end]) return false;
            start++;
            end--;
        }
        return true;
    }

    for (let i = 0; i < s.length; i++) {
        // odd-length 
        for (let j = i; j < s.length; j++) {
            if (isPalindrome(i, j) && (j - i + 1) >= k && (j - i + 1) > longest.length) {
                longest = s.substring(i, j + 1);
            }
        }

        // even-length 
        for (let j = i + 1; j < s.length; j++) {
            if (isPalindrome(i, j) && (j - i + 1) >= k && (j - i + 1) > longest.length) {
                longest = s.substring(i, j + 1);
            }
        }
    }

    return longest;
}


const s = 'babad';
const k = 3;

const result = longePalSubstring(s, k);
console.log(result); 
