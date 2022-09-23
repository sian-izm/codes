import { expect } from 'chai'
import { isValidBST } from '../src/is-valid-bst'
import { TreeNode } from '../src/tree-node-right'

describe('isValidBST', () => {
  it('should return true with 2 nested tree', () => {
    const node4 = new TreeNode(7)
    const node3 = new TreeNode(15)
    const node2 = new TreeNode(20,node3,node4)
    const node1 = new TreeNode(9)
    const root = new TreeNode(3,node1, node2)
    expect(isValidBST(root)).to.equal(true)
  })
})