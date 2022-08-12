import { TreeNode } from './tree-node'
export function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode {
  const mergeNodes = (node1: TreeNode, node2: TreeNode): TreeNode | null => {
    const val = initNum(node1) + initNum(node2)
    let tmpNode = new TreeNode(val)
    if (node1 || node2) {
      tmpNode.right = mergeNodes(node1 ? node1.right : null, node2 ? node2.right : null)
      tmpNode.left = mergeNodes(node1 ? node1.left : null, node2 ? node2.left : null)
    }
    return tmpNode
  }
  const val = root1.val + root2.val
  const result = new TreeNode(val)
  result.right = mergeNodes(root1.right, root2.right)
  result.left = mergeNodes(root1.left, root2.left)
  return result
}

function initNum(node: TreeNode | null): number {
  return node ? node.val : 0
}
