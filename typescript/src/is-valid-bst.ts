import { TreeNode } from "./tree-node-right";

export function isValidBST(root: TreeNode | null): boolean {
  return isSmaller(root.left, root.val) && isLarger(root.right, root.val)
}

function isLarger(node: TreeNode | null, val: number, smallVals?: number[]): boolean {
  if (!node) { return true }
  if (node.val <= val) { return false }
  if (smallVals) {
    if (smallVals.some((e) => e >= node.val)) {return false }
  }
  smallVals.push(node.val)
  return isSmaller(node.left, node.val) && isLarger(node.right, node.val, smallVals)
}

function isSmaller(node: TreeNode | null, val: number): boolean {
  if (!node) { return true }
  if (node.val >= val) { return false }
  return isSmaller(node.left, node.val) && isLarger(node.right, node.val)
}
