// 4. Find the Missing Number
// Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, find the one number that
// is missing from the array using binary search logic.
// Input: `nums = [3,0,1]`
// Output: `2

const FindMissingNumber = (nums) => {
  let n = nums.length;
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === mid) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
};

console.log(FindMissingNumber([3, 0, 1]));
