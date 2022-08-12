import { TreeNode } from './tree-node'
export function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode {
  let result = new TreeNode()
  const mergeNodes = (node1: TreeNode, node2: TreeNode): TreeNode | null => {
    const val = node1.val + node2.val
    let tmpNode = new TreeNode(val)
    if (node1 || node2) {
      tmpNode.right = mergeNodes(node1.right, node2.right)
      tmpNode.left = mergeNodes(node1.left, node2.left)
    }
    return tmpNode
  }
  result.val = root1.val + root2.val
  result.right = mergeNodes(root1.right, root2.right)
  result.left = mergeNodes(root1.left, root2.left)
  return result
}

function rightNum(node: TreeNode | null): number {
  return node ? (node.right ? node.right.val : 0) : 0
}

function leftNum(node: TreeNode | null): number {
  return node ? (node.left ? node.left.val : 0) : 0
}
