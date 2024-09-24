// Find the First and Last Position of an Element in a Sorted Array
// Given a sorted array of integers `nums` and a target value, find the starting and ending position of
// the target in the array using binary search. If the target is not found, return `[-1, -1]`.
// Input: `nums = [5,7,7,8,8,10], target = 8`
// Output: `[3, 4]

const firstPosition = (nums, target) => {
  let n = nums.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      if (nums[mid] === 0 || nums[mid - 1] != target) {
        return mid;
      } else {
        high = mid - 1;
      }
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

const lastPosition = (nums, tagrget) => {
  let n = nums.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === tagrget) {
      if (mid == n - 1 || nums[nums + 1] !== target) {
        return mid;
      } else high = mid - 1;
    } else if (nums[mid] < tagrget) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

const nums = [5, 7, 7, 8, 8, 10];
const target = 8;

console.log(firstPosition(nums, target), lastPosition(nums, target));
