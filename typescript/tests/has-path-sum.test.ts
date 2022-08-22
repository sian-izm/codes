import { expect } from 'chai'
import { hasPathSum } from '../src/has-path-sum'
import { TreeNode } from '../src/tree-node-right'

describe('hasPathSum', () => {
  it('should return true', () => {
    const node8 = new TreeNode(1)
    const node7 = new TreeNode(2)
    const node6 = new TreeNode(7)
    const node5 = new TreeNode(4,null,node8)
    const node4 = new TreeNode(13)
    const node3 = new TreeNode(11,node6,node7)
    const node2 = new TreeNode(8,node4,node5)
    const node1 = new TreeNode(4,node3)
    const root = new TreeNode(5,node1, node2)
    expect(hasPathSum(root, 22)).to.equal(true)
  })

  it('should return false with 2 level node', () => {
    const node2 = new TreeNode(3)
    const node1 = new TreeNode(2)
    const root = new TreeNode(1,node1, node2)
    expect(hasPathSum(root, 5)).to.equal(false)
  })

  it('should return false with null node', () => {
    expect(hasPathSum(null, 0)).to.equal(false)
  })

  it('should return true with 1 level node', () => {
    const root = new TreeNode(1)
    expect(hasPathSum(root, 1)).to.equal(true)
  })
})
