export function maxSubArray(nums: number[]): number[] {
  let maxArray = nums.slice(-1)
  const max = maxArray.reduce((partSum, a) => partSum + a, 0)

  let numsReverse = nums.reverse()

  numsReverse.forEach((element, index) => {
    if (element < 0 ){
      return;
    }
    let tempMaxArray: number[] = [element]
    if (numsReverse[index-1] > 0) {

    }
  })
  return numsReverse
}
