// 8. Check if a String is Palindrome
// Instruction: Write a recursive function to check if a given string is a palindrome (reads the same forward and backward).
// Sample Input and Output:
// Input: "racecar"
// Output: true


const isPalindrome = (str) => {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.slice(1, -1));
}
console.log(isPalindrome("racecar")); 