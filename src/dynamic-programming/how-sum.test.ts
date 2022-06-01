import { howSum } from "./how-sum";
import { expect } from "chai";

describe("How sum", () => {
  it("should be true for this test", () => {
    expect(howSum(7, [5, 3, 4, 7])).to.have.members([3, 4]);
  });

  it("should be false for this test", () => {
    expect(howSum(11, [9, 3, 7])).to.equal(null);
  });

  it("should handle larger sets", () => {
    expect(howSum(30001, [43, 57])).to.not.equal(null);
  });
});
