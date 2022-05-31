import { expect } from "chai";
import { canSum } from "./dynamic-grid-can-sum";

describe("Can sum", () => {
  it("should be true if one of the numbers is 1", () => {
    expect(canSum(100, [1, 101])).to.equal(true);
  });

  it("should return false if 7, [2,4]", () => {
    expect(canSum(7, [2, 4])).to.equal(false);
  });

  it("should return true in this other case", () => {
    expect(canSum(3002, [27, 59])).to.equal(true);
  });
});
