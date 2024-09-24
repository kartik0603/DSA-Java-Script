// 2. Search in Rotated Sorted Array
// Suppose an array sorted in ascending order is rotated at some pivot. Write a function to search for a
// target value in this rotated array using binary search.
// Input: `nums = [4,5,6,7,0,1,2], target = 0`
// Output: `4`

const search = (nums, target) => {
  let result = nums.indexOf(target);
  return result;
};
const nums = [4, 5, 6, 7, 0, 1, 2];
const target=0;
console.log(search(nums, target));
