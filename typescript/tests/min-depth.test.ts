import { expect } from 'chai'
import { minDepth } from '../src/min-depth'
import { TreeNode } from '../src/tree-node'

describe('minDepth', () => {
  it('should return 2-1', () => {
    const node5 = new TreeNode(7)
    const node4 = new TreeNode(15)
    const node3 = new TreeNode(20,node4,node5)
    const node2 = new TreeNode(9)
    const node1 = new TreeNode(3,node3,node2)
    expect(minDepth(node1)).to.equal(2)
  })

  it('should return 5', () => {
    const node5 = new TreeNode(6)
    const node4 = new TreeNode(5,node5)
    const node3 = new TreeNode(4,node4)
    const node2 = new TreeNode(3,node3)
    const node1 = new TreeNode(2,node2)
    expect(minDepth(node1)).to.equal(5)
  })

  it('should return 2-2', () => {
    const node2 = new TreeNode(2)
    const node1 = new TreeNode(1,node2)
    expect(minDepth(node1)).to.equal(2)
  })
  it('should return 2-3', () => {
    const node2 = new TreeNode(2)
    const node1 = new TreeNode(1,null,node2)
    expect(minDepth(node1)).to.equal(2)
  })
})
