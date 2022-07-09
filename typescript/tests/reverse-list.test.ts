import { expect } from 'chai'
import { reverseList, traverse } from '../src/reverse-list'
import { Node } from '../src/list-node'

describe('reverseList', () => {
  it('should reverse single list', () => {
    const node = new Node(1)
    expect(traverse(reverseList(node))).to.deep.equal([1])
  })
})
