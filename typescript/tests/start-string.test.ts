import { start } from "../src/start-string";
import { expect } from "chai";

describe("start-string", () => {
  it("should return string by string arg", () =>{
    expect(start("HOGE")).to.equal("HOGE");
  })
})
