import { TreeNode } from "./tree-node-right";

export function isValidBST(
  root: TreeNode | null,
  min: number = Number.MIN_SAFE_INTEGER,
  max: number = Number.MAX_SAFE_INTEGER
): boolean {
  if (!root) return true
  if (root.val <= min || root.val >= max) return false
  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)
}
