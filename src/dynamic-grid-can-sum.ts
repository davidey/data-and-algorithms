interface Memo {
  [key: number]: boolean;
}

const getMemoKey = (m: number, n: number): string => {
  return `${Math.max(m, n)}-${Math.min(m, n)}`;
};

/**
 * Returns whether is possible or not to generate a sum adding the numbers from the array
 * The numbers in the array may be reused multiple times
 */

export const canSum = (
  targetSum: number,
  numbers: number[],
  memo: Memo = {}
): boolean => {
  if (targetSum in memo) {
    return memo[targetSum];
  }

  if (numbers.includes(1)) {
    return true;
  }

  return (
    numbers.find((n) => {
      const nextSum = targetSum - n;

      if (nextSum < 0) return false;
      if (nextSum === 0) return true;
      memo[nextSum] = canSum(nextSum, numbers, memo);
      return canSum(nextSum, numbers, memo); //memo[nextSum];
    }) !== undefined
  );
};
