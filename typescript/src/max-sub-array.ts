export function maxSubArray(nums: number[]): number[] {
  let maxArray = nums.slice(-1)

  let numsReverse = nums.reverse()
  let max = 0
  let sum = 0
  numsReverse.forEach((element, index) => {
    sum += element

    if (sum > max ) {
      max += sum
    } else {
      if (sum < 0 ) {
        sum = 0
      }
    }
  })
  return numsReverse
}

