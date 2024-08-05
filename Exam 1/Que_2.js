/* Question 2: Merge Two Sorted Arrays

Given two sorted arrays, write a function to merge them into a single sorted array.
1. Input: arr1 = [1, 3, 5], arr2 = [2, 4, 6]
Output: [1, 2, 3, 4, 5, 6] */

 const merge=(arr1,arr2)=>{
    let result=[];

    let mergedArray= [...arr1,...arr2]
    mergedArray.sort((a,b)=>a-b);
    return mergedArray;
 }

let  arr1 = [1, 3, 5];
let  arr2 = [2, 4, 6];
console.log(merge(arr1,arr2));
