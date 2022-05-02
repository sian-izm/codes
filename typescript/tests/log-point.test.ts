import { expect } from "chai";
import { logPoint } from "../src/log-point";

describe("logPoint", () => {
  it("should output log point", () => {
    const point = { x: 12, y: 10 };
    expect(logPoint(point)).to.equal("12, 10");
  })
})
