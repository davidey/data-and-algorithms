export const mergeSort = (arr: number[]): number[] => {
  if (arr.length < 2) {
    return arr;
  }

  const left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  const right = mergeSort(arr.slice(Math.floor(arr.length / 2)));

  let l = 0;
  let r = 0;

  let result = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    if (left[l] < right[r] || right[r] === undefined) {
      result[i] = left[l];
      l++;
    } else {
      result[i] = right[r];
      r++;
    }
  }

  console.log(result);
  return result;
};
