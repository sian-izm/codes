import { expect } from 'chai'
import { isValidBST } from '../src/is-valid-bst'
import { TreeNode } from '../src/tree-node-right'

describe('isValidBST', () => {
  it('should return true with 2 nested tree', () => {
    const node2 = new TreeNode(3)
    const node1 = new TreeNode(1)
    const root = new TreeNode(2,node1, node2)
    expect(isValidBST(root)).to.equal(true)
  })

  it('should return false with 3 nested tree-1', () => {
    const node4 = new TreeNode(6)
    const node3 = new TreeNode(3)
    const node2 = new TreeNode(4,node3,node4)
    const node1 = new TreeNode(1)
    const root = new TreeNode(5,node1, node2)
    expect(isValidBST(root)).to.equal(false)
  })

  it('should return false with 3 nested tree-2', () => {
    const node4 = new TreeNode(7)
    const node3 = new TreeNode(3)
    const node2 = new TreeNode(6,node3,node4)
    const node1 = new TreeNode(4)
    const root = new TreeNode(5,node1, node2)
    expect(isValidBST(root)).to.equal(false)
  })

  it('should return true with 3 nested tree-1', () => {
    const node4 = new TreeNode(9)
    const node3 = new TreeNode(7)
    const node2 = new TreeNode(8,node3,node4)
    const node1 = new TreeNode(1)
    const root = new TreeNode(5,node1, node2)
    expect(isValidBST(root)).to.equal(true)
  })
})
