export class KthLargest {
  k: number
  nums: number[]

  constructor(k: number, nums: number[]){
    this.k = k
    this.nums = nums
  }

  add(val: number): number {
    this.nums.push(val)
    const sortedNums: number[] = this.nums
    sortedNums.sort(function(a, b){return b-a})

    return sortedNums[this.k-1]
  }
}
