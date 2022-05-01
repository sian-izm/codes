import { Backpack } from "../src/backpack";
import { expect } from "chai";

describe("Backpack interface", () => {
  it("should declare string type", () => {
    var backpack: Backpack<string>;
    const object = backpack.get();
    backpack.add("HOGEHOGE");
  })
})
