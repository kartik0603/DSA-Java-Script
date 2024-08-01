const mergeArrays = (arr1, arr2) => {
    let mergedArray = [];
    let i = 0;

    for (i = 0; i < arr1.length; i++) {
        mergedArray.push(arr1[i]);
    }
    for (i = 0; i < arr2.length; i++) {
        mergedArray.push(arr2[i]);
    }

    return mergedArray;
};

const sortedArray = (mergedArray) => {
    let sorted = mergedArray.sort((a, b) => a - b);
    return sorted;
};

let arr1 = [20, 40, 60, 80, 100];
let arr2 = [10, 30, 50, 70, 90, 120];

let merged = mergeArrays(arr1, arr2);
console.log(sortedArray(merged)); 
