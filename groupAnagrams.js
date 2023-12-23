const groupAnagrams = (strs) => {
  let strsArray = strs;
  const result = [];
  for (let i = 0; i < strsArray.length; ) {
    const grouppedAnagrams = [strsArray[i]];
    for (let j = i + 1; j < strsArray.length; j += 1) {
      if (strsArray[i].length !== strsArray[j].length) {
        continue;
      }
      let letters = strsArray[j].split("");
      let strsArrItem = strsArray[i].split("");
      for (let k = 0; k < letters.length; ) {
        if (
          strsArrItem.includes(letters[k]) &&
          letters.length === strsArrItem.length
        ) {
          const savedLetter = letters[k];
          letters = letters.filter((letter) => letter !== savedLetter[k]);
          strsArrItem = strsArrItem.filter((item) => item !== savedLetter[k]);
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
