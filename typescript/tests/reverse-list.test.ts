import { expect } from 'chai'
import { reverseList, traverse } from '../src/reverse-list'
import { ListNode } from '../src/list-node'

describe('reverseList', () => {
  it('should reverse single list', () => {
    const node = new ListNode(1)
    expect(traverse(reverseList(node))).to.deep.equal([1])
  })

  it('should reverse 2 node list', () => {
    const node = new ListNode(1)
    node.next = new ListNode(2)
    expect(traverse(node)).to.deep.equal([1,2])
    expect(traverse(reverseList(node))).to.deep.equal([2,1])
  })

  it('should reverse 3 node list', () => {
    const node = new ListNode(1)
    node.next = new ListNode(2)
    node.next.next = new ListNode(3)
    expect(traverse(node)).to.deep.equal([1,2,3])
    expect(traverse(reverseList(node))).to.deep.equal([3,2,1])
  })
})
