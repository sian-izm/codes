import { TreeNode } from './tree-node'
export function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode {
  let result = new TreeNode()
  const mergeNodes = (node1: TreeNode, node2: TreeNode): void => {
    const right: number = node1.right.val + node2.right.val
    const left: number = node1.right.val + node2.right.val
    result.right = new TreeNode(right)
    result.left = new TreeNode(left)
    mergeNodes(node1.right, node2.right)
    mergeNodes(node1.left, node2.left)
  }
  return result
}
