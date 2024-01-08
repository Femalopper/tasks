// This file contains solution to the following problem:
// https://leetcode.com/problems/group-anagrams/

const groupAnagrams = (strs) => {
  let strsArray = strs;
  const result = [];
  while (strsArray.length > 0) {
    const grouppedAnagrams = [strsArray[0]];
    for (let j = 1; j < strsArray.length; j += 1) {
      if (strsArray[0].length !== strsArray[j].length) {
        continue;
      }
      let letters = strsArray[j].split('');
      let firstWordLetters = strsArray[0].split('');
      while (letters.length > 0) {
        if (
          firstWordLetters.includes(letters[0]) &&
          letters.length === firstWordLetters.length
        ) {
          const savedLetter = letters[0];
          letters = letters.filter((letter) => letter !== savedLetter);
          firstWordLetters = firstWordLetters.filter((letter) => letter !== savedLetter);
        } else {
          break;
        }
      }
      if (letters.length === 0 && firstWordLetters.length === 0) {
        grouppedAnagrams.push(strsArray[j]);
      }
    }
    strsArray = strsArray.filter((str) => !grouppedAnagrams.includes(str));
    result.push(grouppedAnagrams);
  }
  return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["", "b"]));
console.log(groupAnagrams(["", ""]));
console.log(groupAnagrams(["ddddddddddg", "dgggggggggg"])); // [["dgggggggggg"],["ddddddddddg"]]
console.log(
  groupAnagrams(["hhhhu", "tttti", "tttit", "hhhuh", "hhuhh", "tittt"])
); // [["tittt","tttit","tttti"],["hhhhu","hhhuh","hhuhh"]]
