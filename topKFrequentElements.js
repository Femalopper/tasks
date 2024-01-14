// This file contains solution to the following problem:
// https://leetcode.com/problems/top-k-frequent-elements/

const topKFrequent = (nums, k) => {
  const numsOccurences = {};
  for (num of nums) {
    if (!numsOccurences[num]) {
      numsOccurences[num] = 1;
    } else {
      numsOccurences[num] += 1;
    }
  }
  const sortedOccurances = [];
  const numsOccurencesArr = Object.entries(numsOccurences);
  for (let i = 0; i < numsOccurencesArr.length; i += 1) {
    const element = numsOccurencesArr[i];
    const occurence = element[1];
    const num = +element[0];
    if (!sortedOccurances[occurence]) {
      sortedOccurances[occurence] = [];
    }
    sortedOccurances[occurence].push(num);
  }
  const filteredSortedOccurances = sortedOccurances.filter(
    (arr) => arr !== undefined
  );
  let result = [];
  let last = filteredSortedOccurances.length - 1;
  while (result.length < k) {
    result = [...result, ...filteredSortedOccurances[last]];
    last -= 1;
  }
  return result;
};

console.log(topKFrequent([5, 3, 1, 1, 1, 3, 73, 1], 2));
