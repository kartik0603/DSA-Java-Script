//  Check if Two Strings Are Anagrams
// Write a function to determine if two strings are anagrams of each other. Two strings are anagrams if
// they contain the same characters in the same frequency but arranged differently.

// Input: str1 = 'listen', str2 = 'silent' - Output: True

const anagramStr = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    // convert string in array

    let array1 = str1.split("");
    let array2 = str2.split("");

    // sort array

    array1.sort();
    array2.sort();

    // join array

    let newStr1 = array1.join("");
    let newStr2 = array2.join("");

    if (newStr1 === newStr2) {
        return true;
    }
    return false;
};
console.log(anagramStr("listen", "silent"));
