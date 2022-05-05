import { start } from "../src/start-string";
import { expect } from "chai";

describe("start-string", () => {
  it("should return string by string arg", () =>{
    expect(start("HOGE")).to.equal("HOGE");
  });
  it("should return string by string array arg", () =>{
    expect(start(["HOGE", "HUGA"])).to.equal("HOGE,HUGA");
  });
  it("should return string by function returning string", () =>{
    const func = function() {
      return "HOGEHOGE";
    }
    expect(start(func())).to.equal("HOGEHOGE");
  });
  it("should return string by string dictionary", () =>{
    expect(start({s: "Mogo"})).to.equal("Mogo");
  });  
})
