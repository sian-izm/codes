import { expect } from "chai";
import { doSomething } from "../src/call-signature";

describe("call signature type function", () => {
  let Hoge = (someArg: number) => {
    if(someArg === 6) {
      return true
    } else {
      return false
    }
  };
  expect(doSomething({description: "Hogehoge", someProperty: Hoge})).to.equal("Hogehoge returned true");
})