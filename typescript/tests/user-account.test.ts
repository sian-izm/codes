import { expect } from "chai";
import { UserAccount, User } from "../src/user-account";

describe("User Account", () => {
  it("should initialize the name and id", () => {
    const userAccount: User = new UserAccount("Huga", 1);
    expect(userAccount.name).to.equal("Huga");
  })
})
