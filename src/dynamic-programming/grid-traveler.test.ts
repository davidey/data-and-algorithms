import { gridTraveler } from "./grid-traveler";
import { expect } from "chai";

describe("Grid traveler", () => {
  it("should return 1 for 1x1 grid", () => {
    expect(gridTraveler(1, 1)).to.equal(1);
  });

  it("should return 2 for 2x1 grid", () => {
    expect(gridTraveler(2, 1)).to.equal(1);
  });

  it("should return 6 for 3x3 grid", () => {
    expect(gridTraveler(3, 3)).to.equal(6);
  });

  it("should handle larger grids", () => {
    expect(gridTraveler(18, 18)).to.equal(2333606220);
  });
});
