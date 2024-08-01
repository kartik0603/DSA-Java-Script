function PairWithSum(nums, target) {
    
    nums.sort((a, b) => a - b);
  
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      const sum = nums[left] + nums[right];
  
      if (sum === target) {
        return true;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return false;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const targetSum = 9;
  console.log(PairWithSum(numbers, targetSum)); 
  