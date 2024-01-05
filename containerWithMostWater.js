// This file contains solution to the following problem:
// https://leetcode.com/problems/container-with-most-water/

const maxArea = (height) => {
  let pointer1 = 0;
  let pointer2 = height.length - 1;
  let sum = Math.min.apply(null, height);

  while (pointer1 < pointer2) {
    let curr;
    if (height[pointer1] < height[pointer2]) {
      curr = height[pointer1] * (pointer2 - pointer1);
      pointer1 += 1;
    } else {
      curr = height[pointer2] * (pointer2 - pointer1);
      pointer2 -= 1;
    }
    if (curr > sum) {
      sum = curr;
    }
  }
  return sum;
};
