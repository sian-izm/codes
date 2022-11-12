export function lengthOfLIS(nums: number[]): number {
  let array: number[] = [nums[0]]

  for(let i=1; i<=nums.length; i++){
    if (array.slice(-1)[0] < nums[i]) {
      array.push(nums[i])
    } else {
      array[bisectLeft(array, nums[i])] = nums[i]
    }
  }
  return array.length
}

function bisectLeft(array: number[], num: number): number {
  for(let i=0;i<=array.length;i++) {
    if (array[i] > num) {
      return i
    }
  }
}
