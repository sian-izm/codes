import { LinkedList } from "../src/linked-list";
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

  // it('should delete all duplicated nodes-first element-1', () => {
  //   const linkedList = new LinkedList<number>();
  //   linkedList.insertAtEnd(1);
  //   linkedList.insertAtEnd(1);
  //   linkedList.insertAtEnd(2);
  //   linkedList.deleteAllDuplicatedNodes();
  //   expect(linkedList.traverse()).to.deep.equal([2]);
  // })

  // it('should delete all duplicated nodes-first element-2', () => {
  //   const linkedList = new LinkedList<number>();
  //   linkedList.insertAtEnd(1);
  //   linkedList.insertAtEnd(1);
  //   linkedList.insertAtEnd(2);
  //   linkedList.insertAtEnd(2);
  //   linkedList.insertAtEnd(3);
  //   linkedList.deleteAllDuplicatedNodes();
  //   expect(linkedList.traverse()).to.deep.equal([3]);
  // })

  // it('should delete all duplicate nodes - null 1', () => {
  //   const linkedList = new LinkedList<number>();
  //   linkedList.insertAtEnd(1);
  //   linkedList.insertAtEnd(1);
  //   linkedList.insertAtEnd(2);
  //   linkedList.insertAtEnd(2);
  //   linkedList.deleteAllDuplicatedNodes();
  //   expect(linkedList.traverse()).to.deep.equal([])
  // })

  // it('should delete all duplicate nodes - null 2', () => {
  //   const linkedList = new LinkedList<number>();
  //   linkedList.insertAtEnd(1);
  //   linkedList.insertAtEnd(1);
  //   linkedList.insertAtEnd(2);
  //   linkedList.insertAtEnd(2);
  //   linkedList.deleteAllDuplicatedNodes();
  //   expect(linkedList.traverse()).to.deep.equal([])
  // })

  // it('should delete all duplicated nodes-later element', () => {
  //   const linkedList = new LinkedList<number>();
  //   linkedList.insertAtEnd(1);
  //   linkedList.insertAtEnd(2);
  //   linkedList.insertAtEnd(2);
  //   linkedList.insertAtEnd(3);
  //   linkedList.deleteAllDuplicatedNodes();
  //   expect(linkedList.traverse()).to.deep.equal([1,3]);
  // })

  it('should delete all duplicated nodes multiple', () => {
    const linkedList = new LinkedList<number>();
    linkedList.insertAtEnd(10);
    linkedList.insertAtEnd(20);
    linkedList.insertAtEnd(30);
    linkedList.insertAtEnd(30);
    linkedList.insertAtEnd(30);
    linkedList.insertAtEnd(40);
    linkedList.insertAtEnd(40);
    linkedList.deleteAllDuplicatedNodes();
    expect(linkedList.traverse()).to.deep.equal([10,20]);
  })

  // it('should delete all duplicated nodes multiple', () => {
  //   const linkedList = new LinkedList<number>();
  //   linkedList.insertAtEnd(1);
  //   linkedList.insertAtEnd(1);
  //   linkedList.insertAtEnd(2);
  //   linkedList.insertAtEnd(2);
  //   linkedList.insertAtEnd(2);
  //   linkedList.insertAtEnd(10);
  //   linkedList.insertAtEnd(20);
  //   linkedList.insertAtEnd(30);
  //   linkedList.insertAtEnd(30);
  //   linkedList.insertAtEnd(30);
  //   linkedList.insertAtEnd(40);
  //   linkedList.insertAtEnd(40);
  //   linkedList.insertAtEnd(50);
  //   linkedList.insertAtEnd(50);
  //   linkedList.insertAtEnd(50);
  //   linkedList.insertAtEnd(60);
  //   linkedList.insertAtEnd(60);
  //   linkedList.insertAtEnd(70);
  //   linkedList.insertAtEnd(70);
  //   linkedList.insertAtEnd(70);
  //   linkedList.insertAtEnd(80);
  //   linkedList.insertAtEnd(80);
  //   linkedList.insertAtEnd(90);
  //   linkedList.deleteAllDuplicatedNodes();
  //   expect(linkedList.traverse()).to.deep.equal([10,20,90]);
  // })
})
