export function lengthOfLIS(nums: number[]): number {
  let lis: number = 0
  nums.forEach((num, index) => {
    var count: number = 1
    console.log('start for loop of j')
    console.log(num)
    let currentLargestNum = num
    for(let j=index+1; j<=nums.length; j++) {
      console.log('j')
      console.log(nums[j])
      console.log(currentLargestNum)

      if (currentLargestNum < nums[j]) {
        console.log('in if')
        console.log(j)
        console.log(nums[j])
        count++
        currentLargestNum = nums[j]
      }
    }
    if (lis < count ) {
      console.log('count')
      console.log(num)
      console.log(count)

      lis = count
    }
  })
  return lis
}
