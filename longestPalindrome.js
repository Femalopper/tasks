// This file contains solution to the following problem:
// https://leetcode.com/problems/longest-palindrome/

const longestPalindrome = function (s) {
  const lettersOccurances = {};
  for (letter of s) {
    if (!lettersOccurances[letter]) {
      lettersOccurances[letter] = 1;
    } else {
      lettersOccurances[letter] += 1;
    }
  }
  const evenOccurances = Object.values(lettersOccurances).filter((value) => value % 2 === 0);
  const oddOccurances = Object.values(lettersOccurances).filter((value) => value % 2 !== 0);

  // if string has at least one odd occurances there is always one letter in the mid of palindrome
  let sum = 1;
  // if every string letter occurs even number of times just sum all even occurences
  if (oddOccurances.length === 0) {
    sum = 0;
  }
  // if string letter has odd occurences make it even
  for (oddVal of oddOccurances) {
    sum += oddVal - 1;
  }
  for (evenVal of evenOccurances) {
    sum += evenVal;
  }
  return sum;
};
