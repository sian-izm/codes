export function subarraySum(nums: number[], k: number): number {
  let result = 0
  let valueSum = 0
  const recursive = (num: number, i) => {
    result = +1 
    if (nums[i+1] === 0) {
      recursive
    }
  }
  nums.forEach((value,index)=>{
    valueSum += value
    if (valueSum === k) {
      result += 1
      valueSum = 0
    } else if (valueSum <k) {
      for(let i=index+1;i<nums.length;i++) {
        valueSum += nums[i]
        if (valueSum === k ) {
          result += 1
          valueSum = 0
          break
        } else if (valueSum>k) {
          valueSum = 0
          break
        }
        if (i===(nums.length-1)) {
          valueSum = 0
        }
      }
    } else {
      valueSum = 0
    }
  })
  return result
}
