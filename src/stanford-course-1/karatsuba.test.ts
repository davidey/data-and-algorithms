import { karatsuba } from "./karatsuba";
import { expect } from "chai";

describe("Karatsuba", () => {
  it("should multiply numbers", () => {
    expect(karatsuba(1234, 5678)).to.equal(7006652);

    expect(
      karatsuba(
        3141592653589793238462643383279502884197169399375105820974944592,
        2718281828459045235360287471352662497757247093699959574966967627
      )
    ).to.equal(7006652);
  });
});
