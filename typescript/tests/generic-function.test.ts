import { expect } from "chai";
import { firstElement } from "../src/generic-function";

describe("firstElement", () => {
  it("should return string", () => {
    const args = ["hoge", "huga"];
    expect(firstElement(args)).to.equal("hoge");
  });
  it("should return number", () => {
    const args = [1,2,3]
    expect(firstElement(args)).to.equal(1);
  })
})