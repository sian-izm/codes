import { expect } from 'chai';
import { addTwoNumbers } from '../src/add-two-numbers';
import { LinkedList } from '../src/linked-list'

describe('addTwoNumbers linked list', () => {
  it('should return added two nodes', () => {
    const l1 = new LinkedList<number>()
    l1.insertAtEnd(1)
    l1.insertAtEnd(1)
    const l2 = new LinkedList<number>()
    l2.insertAtEnd(2)
    expect(addTwoNumbers(l1,l2).traverse()).to.deep.equal([1,3]);
  })
})
