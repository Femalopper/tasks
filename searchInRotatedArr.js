// This file contains solution to the following problem:
// https://leetcode.com/problems/search-in-rotated-sorted-array/

const search = function (nums, target) {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  if (nums[leftPointer] === target) {
    return leftPointer;
  }
  if (nums[rightPointer] === target) {
    return rightPointer;
  }

  // find the possible end of the left array and the start of the right array
  while (nums[leftPointer] - nums[rightPointer] > 0) {
    leftPointer += 1;
    rightPointer -= 1;
  }

  let pivotIndex = 0;
  // if the number under left pointer is more than the previous number
  if (nums[leftPointer] > nums[leftPointer - 1]) {
    pivotIndex = rightPointer + 1;
  }
  // if the number under left pointer is less than the previous number
  if (nums[leftPointer] < nums[leftPointer - 1]) {
    pivotIndex = leftPointer;
  }

  const searchTarget = (arr, targ) => {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (arr[mid] === targ) {
        return mid;
      }
      if (arr[mid] > targ) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return -1;
  };
  const left = nums.slice(0, pivotIndex);
  const right = nums.slice(pivotIndex);
  if (target <= right[right.length - 1] && target >= right[0]) {
    const foundElement = searchTarget(right, target);
    if (foundElement < 0) return -1;
    return left.length + foundElement;
  }
  return searchTarget(left, target);
};
