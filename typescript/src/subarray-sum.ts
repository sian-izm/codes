export function subarraySum(nums: number[], k: number): number {
  let result = 0
  let valueSum = 0
  nums.forEach((value,index)=>{
    valueSum += value
    if (valueSum === k) {
      result += 1
      if (k === 0) {
        for(let i=index+1;i<nums.length;i++) {
          valueSum += nums[i]
          if (valueSum === k) {
            result += 1
          }
        }
      }
    } else {
      for(let i=index+1;i<nums.length;i++) {
        valueSum += nums[i]
        if (valueSum === k) {
          result += 1
        }
      }
      valueSum = 0
    }
  })
  return result
}
