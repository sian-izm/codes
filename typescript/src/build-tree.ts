import { TreeNode } from "./tree-node-right";

export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const rootVal: number = preorder[0]
  const inorderRootIndex: number = inorder.indexOf(rootVal)
  const result = new TreeNode(rootVal)
  const remainingPreorder = preorder
  const remainingInorder = inorder
  remainingPreorder.shift()
  const fillLeftTree = (preorderVals: number[], inorderVals: number[], tree: TreeNode): void => {
    const val: number = preorderVals[0]
    const inorderIndex: number = inorderVals.indexOf(val)
    remainingPreorder.shift  
    tree = new TreeNode(val)
    fillLeftTree(remainingPreorder,inorderVals.slice(0,inorderIndex), tree.left)
  }
  fillLeftTree(remainingPreorder, inorder.slice(0,inorderRootIndex), result.left)
  return result
}

