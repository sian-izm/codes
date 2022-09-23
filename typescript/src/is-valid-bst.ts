import { TreeNode } from "./tree-node-right";

export function isValidBST(root: TreeNode | null): boolean {
  return isSmaller(root.left, root.val) && isLarger(root.right, root.val)
}

function isLarger(node: TreeNode | null, val: number): boolean {
  if (!node) { return true }
  if (node.val <= val) { return false }
  return isSmaller(node.left, node.val) && isLarger(node.right, node.val)
}

function isSmaller(node: TreeNode | null, val: number): boolean {
  console.log(node.val)
  if (!node) { return true }
  if (node.val >= val) { return false }
  return isSmaller(node.left, node.val) && isLarger(node.right, node.val)
}
