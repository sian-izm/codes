import { TreeNode } from "./tree-node-right";

export function levelOrder(root?: TreeNode): number[][] {
  let currentLevel = 0
  const result: number[][] = []

  const put = (node?: TreeNode, level: number): void => {
    level
  }

  put(root, currentLevel)

  return [[3],[9,20],[15,7]]
};