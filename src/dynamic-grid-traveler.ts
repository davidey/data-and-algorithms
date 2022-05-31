interface Memo {
  [key: string]: number;
}

const getMemoKey = (m: number, n: number): string => {
  return `${Math.max(m, n)}-${Math.min(m, n)}`;
};

/**
 * Returns all the possible paths a m x n grid can be traversed
 * The grid can be traversed only going right or down
 */

export const gridTraveler = (m: number, n: number, memo: Memo = {}): number => {
  const key = getMemoKey(m, n);

  if (key in memo) {
    return memo[key];
  }

  if (m === 0 || n === 0) {
    return 0;
  }

  if (m === 1 && n === 1) {
    return 1;
  }

  const goingRight = gridTraveler(m - 1, n, memo);
  const goingDown = gridTraveler(m, n - 1, memo);

  memo[key] = goingRight + goingDown;

  return memo[key];
};
