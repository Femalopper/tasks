const climbStairs = (n) => {
  let ways = 1;
  let sum = 0;
  let last = 0;
  while (sum < n) {
    const current = ways;
    ways += last;
    last = current;
    sum += 1;
  }
  return ways;
};
climbStairs(10);
