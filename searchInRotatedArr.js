// This file contains solution to the following problem:
// https://leetcode.com/problems/search-in-rotated-sorted-array/

const search = function (nums, target) {
  let pointer1 = 0;
  let pointer2 = nums.length - 1;
  if (nums[pointer1] === target) {
    return pointer1;
  }
  if (nums[pointer2] === target) {
    return pointer2;
  }
  let left = nums;
  let right = [];
  while (nums[pointer1] - nums[pointer2] > 0) {
    pointer1 += 1;
    pointer2 -= 1;
  }

  if (nums[pointer1] > nums[pointer1 - 1] && nums[pointer1] < nums[pointer2]) {
    pointer2 += 1;
    left = nums.slice(0, pointer2);
    right = nums.slice(pointer2);
  }
  if (
    (nums[pointer1] < nums[pointer1 - 1] && nums[pointer1] < nums[pointer2]) ||
    (pointer1 === pointer2 && nums[pointer1] < nums[pointer1 + 1])
  ) {
    left = nums.slice(0, pointer1);
    right = nums.slice(pointer1);
  }
  if (pointer1 > pointer2) {
    left = nums.slice(0, pointer1);
    right = nums.slice(pointer2 + 1);
  }
  if (pointer1 === pointer2 && nums[pointer1] > nums[pointer1 + 1]) {
    left = nums.slice(0, pointer1 + 1);
    right = nums.slice(pointer1 + 1);
  }

  const searchTarget = (arr) => {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (arr[mid] === target) {
        return mid;
      }
      if (arr[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return -1;
  };
  if (target <= right[right.length - 1] && target >= right[0]) {
    const foundElement = searchTarget(right);
    if (foundElement < 0) return -1;
    return left.length + foundElement;
  }
  return searchTarget(left);
};
