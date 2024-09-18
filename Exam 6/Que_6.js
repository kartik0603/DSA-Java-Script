// 'maxProduct(arr)' that
// finds the two largest elements in an array and returns their maximum product.
// Input: [3, 5, 1, 7, 9]
// Output: 63

const maxProduct = (arr) => {
    let max1 = 1;
    let max2 = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        } else if(arr[i] > max2) {
            max2 = arr[i];
        }
    }
    return max1 * max2;
};
console.log(maxProduct([3, 5, 1, 7, 9]));
