import { expect } from "chai";
import { UserAccount } from "../src/user-account";

describe("User Account", () => {
  it("should initialize the name and id", () => {
    let userAccount = new UserAccount("Huga", 1);
    expect(userAccount.name).to.equal("Huga");
  })
})
