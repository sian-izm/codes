import { TreeNode } from "./tree-node-right";

export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const root = preorder[0]
  const rootIndex = inorder.findIndex(root)
  const result = new TreeNode(root, leftNode(preorder[rootIndex+1], inorder[0...rootIndex]), rightNode(preorder[],inorder[rootIndex...-1]))
  return result
}

function leftNode() {}
