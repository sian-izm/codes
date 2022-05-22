import { expect } from "chai";
import { makeObj, MadeFromString } from "../src/construct-signature";

describe("construct signature", () => {
  it('should return name property', () => {
    expect(makeObj(MadeFromString).name).to.equal("hello");
  });
})