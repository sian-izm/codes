import { TreeNode } from './tree-node-right'

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  return findTargetSum(root, targetSum, 0)
}

function findTargetSum(node: TreeNode, targetSum: number, tempSum: number): boolean {
  let nextNode = new TreeNode()
  if (node.left) {
    tempSum += node.left.val
    nextNode = node.left
  } else if (node.right) {
    tempSum += node.right.val
    nextNode = node.right
  }
  if (tempSum > targetSum) {return false}
  if (tempSum === targetSum ) {
    if (!nextNode.left && !nextNode.right) {
      return true
    } else {
      return false
    }
  }
  return findTargetSum(nextNode, targetSum, tempSum)
}
