import { TreeNode } from "./tree-node-right";

export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const result = new TreeNode()
  fillTree(preorder, inorder, result)

  return result
}

function fillTree(preorderVals: number[], inorderVals: number[], tree: TreeNode): void {
  const val: number = preorderVals[0]
  const inorderIndex: number = inorderVals.indexOf(val)

  preorderVals.shift()
  tree.val = val

  if (preorderVals.length) {
    if (inorderVals.slice(0,inorderIndex).length) {
      tree.left = new TreeNode()
      fillTree(preorderVals, inorderVals.slice(0,inorderIndex), tree.left)
    }
    if (inorderVals.slice(inorderIndex+1).length) {
      tree.right = new TreeNode()
      fillTree(preorderVals, inorderVals.slice(inorderIndex+1), tree.right)
    }
  }
}
