import { TreeNode } from './tree-node'
export function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode {
  let result = new TreeNode()
  const mergeNodes = (node1: TreeNode, node2: TreeNode, appendedNode: TreeNode): void => {
    const right: number = rightNum(node1) + rightNum(node2)
    const left: number = leftNum(node1) + leftNum(node2)
    appendedNode.right = new TreeNode(right)
    appendedNode.left = new TreeNode(left)
    mergeNodes(node1 ? node1.right : null, node2 ? node2.right : null, appendedNode)
    mergeNodes(node1 ? node1.left : null, node2 ? node2.left: null, appendedNode)
  }

  mergeNodes(root1, root2, result)
  return result
}

function rightNum(node: TreeNode | null): number {
  return node ? (node.right ? node.right.val : 0 ) : 0
}

function leftNum(node: TreeNode | null): number {
  return node ? (node.right ? node.right.val : 0 ) : 0
}
