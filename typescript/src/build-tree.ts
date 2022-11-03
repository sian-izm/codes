import { TreeNode } from "./tree-node-right";

export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const fillLeftTree = (preorderVals: number[], inorderVals: number[], tree: TreeNode): void => {
    const val: number = preorderVals[0]
    const inorderIndex: number = inorderVals.indexOf(val)
    remainingPreorder.shift()
    preorderVals.shift()
    tree.val = val
    if (remainingPreorder.length) {
      if (inorder.slice(0,inorderIndex).length) {
        tree.left = new TreeNode()
        fillLeftTree(preorderVals, inorder.slice(0,inorderIndex), tree.left)
      }
      console.log('inorder')
      if (inorder.slice(inorderIndex+1).length) {
        console.log('fillrighttree')
        console.log(inorder.slice(inorderIndex+1))
        console.log(remainingPreorder)
        console.log(preorderVals)
        tree.right = new TreeNode()
        fillRightTree(preorderVals, inorder.slice(inorderIndex+1), tree.right)
      }
    }
  }
  const fillRightTree = (preorderVals: number[], inorderVals: number[], tree: TreeNode): void => {
    console.log('called fillright tree')
    console.log(remainingPreorder)
    console.log(preorderVals)
    const val: number = preorderVals[0]
    const inorderIndex: number = inorderVals.indexOf(val)

    remainingPreorder.shift()
    preorderVals.shift()

    console.log(val)
    tree.val = val

    if (remainingPreorder.length) {
      if (inorder.slice(0,inorderIndex).length) {
        tree.left = new TreeNode()
        fillLeftTree(preorderVals, inorder.slice(0,inorderIndex), tree.left)
      }
      if (inorder.slice(inorderIndex+1).length) {
        tree.right = new TreeNode()
        fillRightTree(preorderVals, inorder.slice(inorderIndex+1), tree.right)
      }
    }
  }

  const rootVal: number = preorder[0]
  const inorderRootIndex: number = inorder.indexOf(rootVal)
  const result = new TreeNode(rootVal)
  const remainingPreorder = preorder
  remainingPreorder.shift()

  if (remainingPreorder.length) {
    console.log(inorder)
    console.log(inorderRootIndex)

    if (inorder.slice(0, inorderRootIndex).length) {
      result.left = new TreeNode()
      fillLeftTree(remainingPreorder, inorder.slice(0,inorderRootIndex), result.left)
    }
    if (inorder.slice(inorderRootIndex+1).length) {
      result.right = new TreeNode()
      fillRightTree(remainingPreorder, inorder.slice(inorderRootIndex+1), result.right)
    }
  }
  return result
}
