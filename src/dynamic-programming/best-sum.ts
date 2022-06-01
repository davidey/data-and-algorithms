type Result = number[] | null;

interface Memo {
  [key: number]: number[] | null;
}

/**
 * Takes in a target sum and an array of numbers as arguments
 * Returns an array of a combination of elements that adds up to target sum.
 * Returns null if there are no combinations
 */

export const bestSum = (
  targetSum: number,
  numbers: number[],
  memo: Memo = {}
): number[] | null => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum < 0) return null;
  if (targetSum === 0) return [];

  const hows = numbers
    .map((n) => {
      const nextSum = targetSum - n;

      const result = bestSum(nextSum, numbers, memo);
      return result !== null ? [n, ...result] : null;
    })
    .filter((r) => r !== null);

  if (hows.length > 0) {
    memo[targetSum] = hows.sort(
      (a, b) => (a as number[]).length - (b as number[]).length
    )[0];
  } else {
    memo[targetSum] = null;
  }

  return memo[targetSum];
};
