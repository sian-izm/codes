import { expect } from 'chai'
import { maxDepth, TreeNode } from '../src/max-depth'

describe('maxDepth', () => {
  it('should return 1', () => {
    const node3 = new TreeNode(20,null,null)
    const node2 = new TreeNode(9,null,null)
    const node1 = new TreeNode(3,node3,node2)
    expect(maxDepth(node1)).to.equal(2)
  })
})
