export class TreeNode {
  val: number
  right?: TreeNode
  left?: TreeNode
  constructor(val?: number, right?: TreeNode, left?: TreeNode)  {
    this.val = (val===undefined ? 0 : val)
    this.right = (right===undefined ? null : right)
    this.left = (left===undefined ? null : left)
  }
}
