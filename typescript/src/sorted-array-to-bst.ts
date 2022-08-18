import { TreeNode } from "./tree-node";

export function sortedArrayToBST(nums: number[]): TreeNode | null {
  const length = nums.length
  const tree = new TreeNode(nums[Math.trunc(length/2)])

  if (length > 1) {
    tree.right = sortedArrayToBST(nums.slice(0,Math.trunc(length/2)))
  }
  if (length > 2) {
    tree.left = sortedArrayToBST(nums.slice(Math.round(length/2 + 0.5),length))
  }
  return tree
}
