import { canConstruct } from "./can-construct";
import { expect } from "chai";

describe("Can construct", () => {
  it("should be true for this test", () => {
    expect(canConstruct("banana", ["na", "ba"])).to.equal(true);
  });

  it("should handle complex cases", () => {
    expect(
      canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
        "e",
        "ee",
        "eee",
        "eeee",
        "eeeee",
        "eeeeee"
      ])
    ).to.equal(false);
  });
});
