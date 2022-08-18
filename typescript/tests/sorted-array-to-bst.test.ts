import { expect } from 'chai'
import { sortedArrayToBST } from '../src/sorted-array-to-bst'
import { TreeNode } from '../src/tree-node'

describe('sortedArrayToBST', () => {
  it('should return 2 nested level tree', () => {
    const node4 = new TreeNode(5)
    const node3 = new TreeNode(9,node4)
    const node2 = new TreeNode(-10)
    const node1 = new TreeNode(-3,node2)
    const result = new TreeNode(0,node1,node3)

    expect(sortedArrayToBST([-10,-3,0,5,9])).to.deep.equal(result)
  })
})
