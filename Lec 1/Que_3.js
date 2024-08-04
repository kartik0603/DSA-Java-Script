/* Find the Smallest Element

Write a function to find the smallest element in an array.

Input: [3, 7, 1, 9, 2]

Output: 1

Input: [10, 20, 5]

Output: 5*/


const smallEle=(arr)=>{

    let smallEle=arr[0];

    for(let i=0; i<arr.length;i++){
        if(smallEle>arr[i]){
            smallEle=arr[i]
        }
    }
    return smallEle;

}
let arr= [3, 7, 1, 9, 2];
console.log(smallEle(arr));