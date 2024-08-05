/* Question 1: Reverse an Array Without Using Built-in Functions

Write a function to reverse an array of integers without using any built-in functions. */


let arr=[1,2,3,4,5,6,7];

const reverse=(arr)=>{
    newArray=[];
    let left=0,right=arr.length-1;
    for(let i=right; i >=left; i-- ){
        
   newArray.push(arr[i]);
    }
    return newArray;
}


console.log(reverse(arr));
