import { expect } from 'chai'
import { levelOrder } from '../src/level-order'
import { TreeNode } from '../src/tree-node-right'

describe('levelOrder', () => {
  it('should return 3 level tree node', () => {
    const node4 = new TreeNode(17)
    const node3 = new TreeNode(15)
    const node2 = new TreeNode(20,node3,node4)
    const node1 = new TreeNode(9)
    const root = new TreeNode(3,node1, node2)
    expect(levelOrder(root)).to.deep.equal([[3],[9,20],[15,7]])
  })
})