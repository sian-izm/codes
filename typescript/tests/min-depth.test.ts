import { expect } from 'chai'
import { minDepth } from '../src/min-depth'
import { TreeNode } from '../src/tree-node'

describe('minDepth', () => {
  it('should return 1', () => {
    const node3 = new TreeNode(20,null,null)
    const node2 = new TreeNode(9,null,null)
    const node1 = new TreeNode(3,node3,node2)
    expect(minDepth(node1)).to.equal(1)
  })
})
