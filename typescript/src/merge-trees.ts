import { TreeNode } from './tree-node'
export function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode {
  if (!root1 && !root2) { return null }
  return mergedTree(root1, root2)
}

function mergedTree(node1?: TreeNode, node2?: TreeNode): TreeNode | null {
  const val = initNum(node1) + initNum(node2)
  let tmpNode = new TreeNode(val)
  if (isExistNum(node1?.right) || isExistNum(node2?.right)) {
    tmpNode.right = mergedTree(node1?.right, node2?.right)
  }
  if (isExistNum(node1?.left) || isExistNum(node2?.left)) {
    tmpNode.left = mergedTree(node1?.left, node2?.left)
  }
  return tmpNode
}

function initNum(node: TreeNode | null): number {
  return node?.val || 0
}

function isExistNum(node: TreeNode | null): boolean {
  if (node?.val || node?.val == 0) {
    return true
  } else {
    return false
  }
}
