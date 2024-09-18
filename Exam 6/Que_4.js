// Reversal:
//
// Input: 'recursion'
// Output: 'noisrucer'

const Reversal = (str) => {
    let reverseStr = str.split("").reverse().join("");
    return reverseStr;
};
let str = "recursion";
console.log(Reversal("recursion"));
