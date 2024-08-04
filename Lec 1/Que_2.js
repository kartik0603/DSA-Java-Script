/* Write a function to find the largest element in an array.

Input: [3, 7, 1, 9, 2]

Output: 9

Input: [10, 20, 5]

Output: 20*/

const large=(arr)=>{

    let large=arr[0];

    for(let i=0; i<arr.length;i++){
        if(large<arr[i]){
            large=arr[i]
        }
    }
    return large;

}
let arr= [3, 7, 1, 9, 2];
console.log(large(arr)); 
