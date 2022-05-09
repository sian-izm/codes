import { expect } from "chai";
import { liveDangerously } from "../src/live-dangerously";

describe("test optional number", () => {
  it("should return fixed number", () => {
    expect(liveDangerously(123.456)).to.equal('123');
  });
  it("should return empty number", () => {
    expect(liveDangerously()).to.equal('HOGE');
  })
})
