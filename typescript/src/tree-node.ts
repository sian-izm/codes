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
