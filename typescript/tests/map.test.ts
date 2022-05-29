import { expect } from "chai";
import { mapAlias } from "../src/map";

describe("mapAlias", () => {
  it('should behave map function', () => {
    const parsed = mapAlias(["1", "2", "3"], (n) => parseInt(n));
    expect(parsed).to.deep.equal([1,2,3]);
  });
})
