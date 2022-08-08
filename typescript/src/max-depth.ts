import { TreeNode } from './tree-node'

export function maxDepth(root: TreeNode | null): number {
  return root ? findNestedDepth(root, 1) : 0
}

function findNestedDepth(node: TreeNode, tmpDepth: number): number {
  let result = tmpDepth
  if (node.right) {
    const nestedDepth = findNestedDepth(node.right, tmpDepth + 1)
    if (nestedDepth > result) {
      result = nestedDepth
    }
  }

  if (node.left) {
    const nestedDepth = findNestedDepth(node.left, tmpDepth + 1)
    if (nestedDepth > result) {
      result = nestedDepth
    }
  }
  return result
}
