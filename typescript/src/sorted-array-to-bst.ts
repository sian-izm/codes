import { TreeNode } from "./tree-node";

export function sortedArrayToBST(nums: number[]): TreeNode | null {
  return buildTreeNode(nums)
}

function buildTreeNode(nums: number[]): TreeNode | null {
  const length = nums.length
  console.log('---------')
  console.log(length)
  console.log(nums.slice(0,Math.trunc(length/2)))
  console.log(nums.slice(Math.round(length/2),length))
  const tempResult = new TreeNode(nums[Math.trunc(length/2)])
  if (length > 1) {
    tempResult.right = buildTreeNode(nums.slice(0,Math.trunc(length/2)))
    tempResult.left = buildTreeNode(nums.slice(Math.round(length/2),length))
  }
  return tempResult
}
