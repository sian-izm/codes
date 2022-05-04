import { expect } from "chai";
import { fn } from "../src/empty";

describe("fun", () => {
  it("should call empty arg function", () => {
    expect(fn({x: 11})).to.equal(undefined);
  })
})
