// 9. Greatest Common Divisor (GCD)
// Instruction: Write a recursive function to find the GCD of two non-negative integers using the Euclidean algorithm.
// Sample Input and Output:
// Input: 48, 18
// Output: 6

const GcD= (a,b)=>{
    if(b==0){
        return a;
    }
    return GcD(b,a%b);
}
console.log(GcD(48,18));