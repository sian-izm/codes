import { expect } from "chai";
import { greeter, printText} from "../src/greeter"

describe("function type expression", () => {
  it("should output text", () => {
    expect(greeter(printText)).to.equal("Hello hogehoge + Hello hogehoge");
  })
})