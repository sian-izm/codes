import { expect } from "chai";
import { mapAlias } from "../src/map";

describe("mapAlias", () => {
  it('should return int', () => {
    const parsed = mapAlias(["1", "2", "3"], (n) => parseInt(n));
    expect(parsed).to.deep.equal([1,2,3]);
  });
  it('should return string', () => {
    const parsed = mapAlias([1, 2, 3], (n) => String(n));
    expect(parsed).to.deep.equal(['1','2','3']);
  })
})
