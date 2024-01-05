// This file contains solution to the following problem:
// https://leetcode.com/problems/intersection-of-two-linked-lists/

const getIntersectionNode = function (headA, headB) {
  let depthA = 0;
  let depthB = 0;
  let h1 = headA;
  let h2 = headB;
  while (h1) {
    depthA += 1;
    h1 = h1.next;
  }
  while (h2) {
    depthB += 1;
    h2 = h2.next;
  }
  let skip = 0;
  let skippedHead = headA;
  let notSkippedHead = headB;

  if (depthA > depthB) {
    skip = depthA - depthB;
  } else {
    skip = depthB - depthA;
    skippedHead = headB;
    notSkippedHead = headA;
  }

  let counter = 0;
  while (counter < skip) {
    skippedHead = skippedHead.next;
    counter += 1;
  }

  while (skippedHead && notSkippedHead) {
    if (skippedHead === notSkippedHead) {
      return skippedHead;
    }
    skippedHead = skippedHead.next;
    notSkippedHead = notSkippedHead.next;
  }
};
