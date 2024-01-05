// This file contains solution to the following problem:
// https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/

const minimumCost = (cost) => {
  const sortedPrices = cost.sort((a, b) => b - a);
  const freeCandy = 3;
  let result = 0;
  let counter = 0;
  let temp = 0;
  while (counter < sortedPrices.length) {
    temp += 1;
    if (temp !== freeCandy) {
      result += sortedPrices[counter];
    } else {
      temp = 0;
    }
    counter += 1;
  }
  return result;
};
