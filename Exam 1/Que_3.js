/* Maximum Product Subarray

Given an array of integers, write a function to find the contiguous subarray within an array
(containing at least one number) which has the largest product.
 Input: [2, 3, -2, 4]
Output: 6 (The subarray [2, 3] has the largest product 6.) */

const maximumSubArray =(arr)=>{

   

    for(let i =0; i< arr.length;i++ ){
        for(let j=i+1; j<arr.length-1;j++)
        if(arr[i]<arr[j]){
            let max=Math.max(arr[i],arr[j])
        }

    }
    return max;

}
let arr = [2, 3, -2, 4];
console.log(maximumSubArray(arr));

