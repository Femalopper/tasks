// This file contains solution to the following problem:
// https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/

const minimumCost = (cost) => {
  const sortedPrices = cost.sort((a, b) => b - a);
  const freeCandyNumber = 3;
  let result = 0;
  let candiesCounter = 0;
  for (let i = 0; i < sortedPrices.length; i += 1) {
    candiesCounter += 1;
    if (candiesCounter !== freeCandyNumber) {
      result += sortedPrices[i];
    } else {
      candiesCounter = 0;
    }
  }
  return result;
};
