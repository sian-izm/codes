import { TreeNode } from "./tree-node-right"

export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  let currentLevel = 0
  const result: number[][] = []

  const put = (node: TreeNode | null, level: number): void => {
    if (node) {
      if (!result[level]) {
        result[level] = []
      }
      result[level].push(node.val)
      if (node.left) { put(node.left, level + 1) }
      if (node.right) { put(node.right, level + 1) }
    }
  }
  put(root, currentLevel)

  result.forEach((value, i) => {
    if (i % 2 === 1 ) { value.reverse() }
  })
  return result
};