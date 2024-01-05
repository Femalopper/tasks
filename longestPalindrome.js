// This file contains solution to the following problem:
// https://leetcode.com/problems/longest-palindrome/

const longestPalindrome = function (s) {
  const hashMap = {};
  for (let i = 0; i < s.length; i += 1) {
    const element = s[i];
    if (!hashMap[s[i]]) {
      hashMap[element] = 1;
    } else {
      hashMap[element] += 1;
    }
  }
  const evenValues = Object.values(hashMap).filter((value) => value % 2 === 0);
  const oddValues = Object.values(hashMap).filter((value) => value % 2 !== 0);
  let sum = 1;
  if (oddValues.length === 0) {
    sum = 0;
  }
  for (let i = 0; i < oddValues.length; i += 1) {
    sum += oddValues[i] - 1;
  }
  for (let i = 0; i < evenValues.length; i += 1) {
    sum += evenValues[i];
  }
  return sum;
};
