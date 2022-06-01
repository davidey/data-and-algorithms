interface Memo {
  [key: string]: boolean;
}

/**
 * Returns whether is possible to construct the target string by
 * concatenating the words in the bank array
 */

export const canConstruct = (
  target: string,
  wordBank: string[],
  memo: Memo = {}
): boolean => {
  console.log("target", target);
  if (target in memo) return memo[target];

  const result = wordBank.find((word) => {
    if (
      target === word ||
      (target.indexOf(word) === 0 &&
        canConstruct(target.slice(word.length), wordBank, memo))
    ) {
      return true;
    } else {
      return false;
    }
  });

  memo[target] = result !== undefined;
  return memo[target];
};
