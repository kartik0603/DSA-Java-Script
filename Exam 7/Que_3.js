// . Find Peak Element
// A peak element in an array is an element that is strictly greater than its neighbors. Given an array
// `nums`, find the index of a peak element using binary search. The array may contain multiple peaks,
// so return any peak element's index.
// Input: `nums = [1,2,3,1]`
// Output: `2` (Index of 3)


const  peakElement =(nums) => {
    let low = 0;
    let high = nums.length - 1;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] < nums[mid + 1]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
};

console.log(peakElement([1, 2, 3, 1]));
