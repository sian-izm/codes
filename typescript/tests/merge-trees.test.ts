import { expect } from 'chai'
import { mergeTrees } from '../src/merge-trees'
import { TreeNode } from '../src/tree-node'

describe('mergeTrees', () => {
  it('should return 3 level nestedTree', () => {
    const node4 = new TreeNode(5)
    const node3 = new TreeNode(3,null,node4)
    const node2 = new TreeNode(2)
    const tree1 = new TreeNode(1,node2,node3)

    const node13 = new TreeNode(4)
    const node7 = new TreeNode(7)
    const node6 = new TreeNode(1,node13)
    const node5 = new TreeNode(3,node7)
    const tree2 = new TreeNode(2,node5,node6)

    const node12 = new TreeNode(5)
    const node11 = new TreeNode(4)
    const node10 = new TreeNode(4,node11,node12)
    const node9 = new TreeNode(7)
    const node8 = new TreeNode(5,node9)
    const result = new TreeNode(3,node8,node10)
    expect(mergeTrees(tree1, tree2)).to.deep.equal(result)
  })

  it('should return 3 level nestedTree', () => {
    expect(mergeTrees(null, null)).to.deep.equal(null)
  })

  it('should return 3 level nestedTree', () => {
    const tree1 = new TreeNode(0)
    const tree2 = new TreeNode(0)
    const result = new TreeNode(0)
    expect(mergeTrees(tree1, tree2)).to.deep.equal(result)
  })
})
