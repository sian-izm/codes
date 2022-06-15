import { LinkedList } from "../src/linked-list";
import { Node } from "../src/node";
import { expect } from "chai";

interface Post {
  title: string;
}

describe("linked list", () => {
  it('should insert in begin - number', () => {
    const linkedList = new LinkedList<number>();
    linkedList.insertInBegin(1);
    linkedList.insertInBegin(3);
    linkedList.insertInBegin(1);
    expect(linkedList.traverse()).to.deep.equal([1,3,1]);
  });

  it('should insert in begin', () => {
    const linkedList = new LinkedList<Post>();
    linkedList.insertInBegin({title: "Hogehoge"});
    linkedList.insertInBegin({title: "Mogomogo"});
    expect(linkedList.traverse()).to.deep.equal([{title: "Mogomogo"}, { title: "Hogehoge"}]);
  });

  it('should insert at end', () => {
    const linkedList = new LinkedList<Post>();
    linkedList.insertAtEnd({title: "Hogehoge"});
    linkedList.insertAtEnd({title: "Mogomogo"});
    expect(linkedList.traverse()).to.deep.equal([{title: "Hogehoge"},{title: "Mogomogo"}]);
  });

  it('should insert at end', () => {
    const linkedList = new LinkedList<Post>();
    linkedList.insertAtEnd({title: "Hogehoge"});
    linkedList.insertAtEnd({title: "Mogomogo"});
    expect(linkedList.size()).to.equal(2);
  });

  it('should search node', () => {
    const linkedList = new LinkedList<Post>();
    linkedList.insertInBegin({title: "Hogehoge"});
    linkedList.insertInBegin({title: "Mogomogo"});
    linkedList.insertInBegin({title: "Fugafuga"});
    expect(linkedList.search(({title}) => title === 'Mogomogo').data).to.deep.equal({ title: "Mogomogo" })
  });

  it('should delete node', () => {
    const linkedList = new LinkedList<Post>();
    linkedList.insertInBegin({title: "Hogehoge"});
    linkedList.insertInBegin({title: "Mogomogo"});
    linkedList.insertInBegin({title: "Fugafuga"});
    const node = linkedList.search(({title}) => title === 'Mogomogo')
    linkedList.deleteNode(node);
    expect(linkedList.traverse()).to.deep.equal([{title: "Fugafuga"}, {title: "Hogehoge"}]);
  });

  it('should delete duplicated nodes', () => {
    const linkedList = new LinkedList<number>();
    linkedList.insertAtEnd(1);
    linkedList.insertAtEnd(1);
    linkedList.insertAtEnd(2);
    linkedList.insertAtEnd(2);
    linkedList.insertAtEnd(2);
    linkedList.insertAtEnd(3);
    linkedList.insertAtEnd(3);
    linkedList.insertAtEnd(4);
    linkedList.deleteDuplicatedNodes();
    expect(linkedList.traverse()).to.deep.equal([1,2,3,4]);
  })
})
