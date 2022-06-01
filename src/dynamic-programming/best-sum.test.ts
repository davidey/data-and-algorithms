import { bestSum } from "./best-sum";
import { expect } from "chai";

describe("Best sum", () => {
  it("should be true for this test", () => {
    expect(bestSum(7, [5, 3, 4, 7])).to.have.members([7]);
  });

  it("should be false for this test", () => {
    expect(bestSum(11, [9, 3, 7])).to.equal(null);
  });

  it("should handle larger sets", () => {
    expect(bestSum(30001, [43, 57])).to.not.equal(null);
  });
});
