// 5. Sum of Digits
// Instruction: Write a recursive function to calculate the sum of the digits of a given non-negative integer.
// Sample Input and Output:
// Input: 123
// Output: 6


const sumOFDigits = (num) => {
    if(num == 0){
        return 0;
    }
    return num%10 + sumOFDigits(Math.floor(num/10));
}

console.log(sumOFDigits(123));