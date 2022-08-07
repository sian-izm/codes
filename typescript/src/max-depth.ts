export class TreeNode {
  val: number
  right: TreeNode | null
  left: TreeNode | null
  constructor(val?: number, right?: TreeNode | null, left?: TreeNode | null)  {
    this.val = (val===undefined ? 0 : val)
    this.right = (right===undefined ? null : right)
    this.left = (left===undefined ? null : left)
  }
}

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
