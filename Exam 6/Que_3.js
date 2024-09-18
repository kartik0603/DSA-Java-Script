// Digit Sum:
// - Example Spell:
// Input: 1234

// Output: 10

const digitSum = (num) => {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
};

console.log(digitSum(1234));
