import { expect } from "chai";
import { logPoint } from "../src/log-point";
import { VirtualPoint } from "../src/virtual-point";

describe("logPoint", () => {
  it("should output log point", () => {
    const point = { x: 12, y: 10 };
    expect(logPoint(point)).to.equal("12, 10");
  });
  it("should output from virtual point class", () => {
    const point = new VirtualPoint(10, 12);
    expect(logPoint(point)).to.equal("10, 12");
  });
})
