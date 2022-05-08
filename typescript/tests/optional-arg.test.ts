import { expect } from "chai";
import { printName } from "../src/optional-arg";

describe("printName", () => {
  it("should return last with two args", () => {
    expect(printName("Huga", "Hoge")).to.equal("Hoge");
  });
  it("should return last with one arg", () => {
    expect(printName("Huga")).to.equal("Huga");
  })
})
