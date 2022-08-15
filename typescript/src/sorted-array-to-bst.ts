import { TreeNode } from "./tree-node";

export function sortedArrayToBST(nums: number[]): TreeNode | null {
  const length = nums.length
  const result = new TreeNode(nums[Math.trunc(length/2)])
  result.right = buildTreeNode(nums[0...Math.trunc(length/2)]))
  result.left = buildTreeNode(nums[Math.trunc(length/2)...-1]))
  return null
}

function buildTreeNode(nums: number[]): TreeNode | null {
  return null
}
