import { LinkedList } from "../src/linked-list";
import { Node } from "../src/node";
import { expect } from "chai";

interface Post {
  title: string;
}

describe("linked list", () => {
  it('should insert in begin', () => {
    const linkedList = new LinkedList<Post>();
    linkedList.insertInBegin({title: "Hogehoge"});
    linkedList.insertInBegin({title: "Mogomogo"});
    expect(linkedList.traverse()).to.deep.equal([{title: "Mogomogo"}, { title: "Hogehoge"}])
  })
})
