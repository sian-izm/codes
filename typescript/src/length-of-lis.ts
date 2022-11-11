export function lengthOfLIS(nums: number[]): number {
  let array = [nums[0]]

  for(let i=1; i<=nums.length; i++){
    if (array[i-1] < nums[i]) {
      array.push(nums[i])
    } else {
      bisectLeft(array, nums[i])
    }
  }

  let lis: number = 0
  nums.forEach((num, index) => {
    var count: number = 1
    console.log('start for loop of j')
    console.log(num)
    let currentLargestNum = num

    for(let j=index+1; j<=nums.length; j++) {
      console.log('j')
      console.log(j)
      console.log(nums[j])
      console.log(currentLargestNum)

      let level = LIS(nums.slice(j), nums[0], 0)
      if (level > lis) {
        lis = level
      }
      console.log(lis)
      // if (currentLargestNum < nums[j]) {
      //   console.log('in if')
      //   console.log(j)
      //   console.log(nums[j])
      //   count++
      //   currentLargestNum = nums[j]
      // }
    }
    // if (lis < count ) {
    //   console.log('count')
    //   console.log(num)
    //   console.log(count)

    //   lis = count
    // }
  })
  return lis
}

function bisectLeft(array: number[], num: number): number {
  for(let i=0;i<=array.length;i++) {
    if (array[i] > num) {
      return i
    }
  }
  return array.length
}

function LIS(nums: number[], currentLargestNum: number, currentLevel: number): number {
  nums.shift()
  if (!nums.length) { return currentLevel }

  if (nums[0] > currentLargestNum) {
    return LIS(nums, nums[0], currentLevel + 1)
  } else {
    return LIS(nums, currentLargestNum, currentLevel)
  }
}
