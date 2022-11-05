import { expect } from 'chai'
import { TreeNode } from '../src/tree-node-right'
import { buildTree } from '../src/build-tree'

describe('buildTree', () => {
  it('should return 1 level tree', () => {
    const preorder = [-1]
    const inorder = [-1]
    const result = new TreeNode(-1)
    expect(buildTree(preorder, inorder)).to.deep.equal(result)
  })

  it('should return 3 level tree', () => {
    const preorder = [3,9,20,15,7]
    const inorder = [9,3,15,20,7]

    const node4 = new TreeNode(7)
    const node3 = new TreeNode(15)
    const node2 = new TreeNode(20,node3,node4)
    const node1 = new TreeNode(9)
    const result = new TreeNode(3,node1, node2)
    expect(buildTree(preorder, inorder)).to.deep.equal(result)
  })
})
