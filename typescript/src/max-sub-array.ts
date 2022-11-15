export function maxSubArray(nums: number[]): number[] {
  let maxArray = nums.slice(-1)

  let numsReverse = nums.reverse()

  numsReverse.forEach((element, index) => {
    if (element < 0 ){
      return;
    }
    let tempMaxArray: number[] = [element]
    if (numsReverse[index-1] > 0) {
      tempMaxArray.push(numsReverse[index-1])
      // check next element
    } else {

    }
    if (sum(tempMaxArray) > sum(maxArray)) {
      maxArray = tempMaxArray
    }
  })
  return numsReverse
}

function sum(array: number[]): number {
  return array.reduce((partSum, a) => partSum + a, 0)
}
