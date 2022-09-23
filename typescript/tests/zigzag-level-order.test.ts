import { expect } from 'chai'
import { TreeNode } from '../src/tree-node-right'
import { zigzagLevelOrder } from '../src/zigzag-level-order'

describe('levelOrder', () => {
  it('should return 3 level tree node', () => {
    const node4 = new TreeNode(7)
    const node3 = new TreeNode(15)
    const node2 = new TreeNode(20,node3,node4)
    const node1 = new TreeNode(9)
    const root = new TreeNode(3,node1, node2)
    expect(zigzagLevelOrder(root)).to.deep.equal([[3],[20,9],[15,7]])
  })

  it('should return 3 level tree node-2', () => {
    const node4 = new TreeNode(5)
    const node3 = new TreeNode(4)
    const node2 = new TreeNode(3,null, node4)
    const node1 = new TreeNode(2,node3)
    const root = new TreeNode(1,node1, node2)
    expect(zigzagLevelOrder(root)).to.deep.equal([[1],[3,2],[4,5]])
  })
})