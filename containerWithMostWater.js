// This file contains solution to the following problem:
// https://leetcode.com/problems/container-with-most-water/

const maxArea = (height) => {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let sum = Math.min.apply(null, height);

  while (leftPointer < rightPointer) {
    let curr;
    if (height[leftPointer] < height[rightPointer]) {
      curr = height[leftPointer] * (rightPointer - leftPointer);
      leftPointer += 1;
    } else {
      curr = height[rightPointer] * (rightPointer - leftPointer);
      rightPointer -= 1;
    }
    if (curr > sum) {
      sum = curr;
    }
  }
  return sum;
};
