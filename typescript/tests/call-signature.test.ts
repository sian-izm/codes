import { expect } from "chai";
import { doSomething } from "../src/call-signature";

describe("call signature type function", () => {
  const fn = (n: number): boolean => {
    if(n === 6) {
      return true
    } else {
      return false
    }
  };
  expect(doSomething({description: "hogehoge", fn(6)})).to.equal("hogehoge");
})