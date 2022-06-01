import { resourceLimits } from "worker_threads";

interface Memo {
  [key: number]: number[] | null;
}

/**
 * Takes in a target sum and an array of numbers as arguments
 * Returns an array of a combination of elements that adds up to target sum.
 * Returns null if there are no combinations
 */

export const howSum = (
  targetSum: number,
  numbers: number[],
  memo: Memo = {}
): number[] | null => {
  if (targetSum in memo) {
    return memo[targetSum];
  }

  if (targetSum < 0) return null;
  if (targetSum === 0) return [];

  for (const n of numbers) {
    const nextSum = targetSum - n;

    const result = howSum(nextSum, numbers, memo);

    if (result !== null) {
      memo[targetSum] = [n, ...result];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return memo[targetSum];
};
