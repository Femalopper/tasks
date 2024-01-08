// This file contains solution to the following problem:
// https://leetcode.com/problems/intersection-of-two-linked-lists/

const getIntersectionNode = (headA, headB) => {
  const countDepth = (head) => {
    let depth = 0;
    while (head) {
      head = head.next;
      depth += 1;
    }
    return depth;
  }
  const depthA = countDepth(headA);
  const depthB = countDepth(headB);

  let skippedHead = headA;
  let otherHead = headB;
  let skipCnt = depthA - depthB;

  if (depthB > depthA) {
    skipCnt = depthB - depthA;
    skippedHead = headB;
    otherHead = headA;
  }

  for (let i = 0; i < skipCnt; i += 1) {
    skippedHead = skippedHead.next;
  }

  while (skippedHead && otherHead) {
    if (skippedHead === otherHead) {
      return skippedHead;
    }
    skippedHead = skippedHead.next;
    otherHead = otherHead.next;
  }
};
