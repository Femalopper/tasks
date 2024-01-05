// This file contains solution to the following problem:
// https://leetcode.com/problems/group-anagrams/

const groupAnagrams = (strs) => {
  let strsArray = strs;
  const result = [];
  while (strsArray.length > 0) {
    const grouppedAnagrams = [strsArray[0]]; // "eat"
    for (let j = 1; j < strsArray.length; j += 1) {
      if (strsArray[0].length !== strsArray[j].length) {
        continue;
      }
      let letters = strsArray[j].split(""); // t e a
      let strsArrItem = strsArray[0].split(""); // e a t
      while (letters.length > 0) {
        if (
          strsArrItem.includes(letters[0]) &&
          letters.length === strsArrItem.length
        ) {
          const savedLetter = letters[0];
          letters = letters.filter((letter) => letter !== savedLetter[0]); // [e, a]
          strsArrItem = strsArrItem.filter((item) => item !== savedLetter[0]); // [e, a]
        } else {
          break;
        }
      }
      if (letters.length === 0 && strsArrItem.length === 0) {
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
