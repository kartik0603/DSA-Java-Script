// Palindrome Oracle's Test:
// Example Oracle Test:
// Input: 'racecar'
// Output: true

const palindromeTest = (str) => {

    //   let strningReverse=str.reverse();
    //   if (str === strningReverse) {
    //     return true;
    //   }

    let reverseStr = str.split("").reverse().join("");
    if (str === reverseStr) {
        return true;
    }


}
console.log(palindromeTest('racecar'));