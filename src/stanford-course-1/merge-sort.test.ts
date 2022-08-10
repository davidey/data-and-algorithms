import { mergeSort } from "./merge-sort";
import { expect } from "chai";

describe("Merge sort", () => {
  it("should return a sorted array of numbers", () => {
    expect(mergeSort([5, 4, 1, 8, 7, 2, 6, 3])).to.deep.equal([
      1, 2, 3, 4, 5, 6, 7, 8
    ]);
  });
});
