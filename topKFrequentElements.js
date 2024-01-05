// This file contains solution to the following problem:
// https://leetcode.com/problems/top-k-frequent-elements/

const topKFrequent = (nums, k) => {
    const numsOccurences = {};
    const occurencesNums = {};
    for (let i = 0; i < nums.length; i += 1) {
        if(!numsOccurences[nums[i]]) {
            numsOccurences[nums[i]] = 1;
        } else {
            numsOccurences[nums[i]] += 1;
        }
    }
    for (let n in numsOccurences) {
        if(!occurencesNums[numsOccurences[n]]) {
            occurencesNums[numsOccurences[n]] = [n];
        } else {
            occurencesNums[numsOccurences[n]] = [...occurencesNums[numsOccurences[n]], n];
        }
    }
    const values = Object.values(occurencesNums);
    let result = [];
    let count = values.length - 1;
    for (let i = 0; i < k;) {
      result = [...result, ...values[count]];
      i = result.length;
      count -= 1;
    }
    return result;
};