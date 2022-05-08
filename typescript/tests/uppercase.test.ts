import { expect } from "chai";
import { uppercase } from "../src/uppercase";

describe("uppercase", () => {
  it("should return uppercase", () => {
    const str = "hogehoge";
    expect(uppercase("hogehoge")).to.equal("HOGEHOGE");
  })
})
