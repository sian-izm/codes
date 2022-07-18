export function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
  const sumArray = []
  nums1.forEach(function(num1){
    nums2.forEach(function(num2){
      const key: number = num1 + num2
      sumArray.push([key, [num1, num2]])
    })
  })
  sumArray.sort(function(first, second) {
    return first[0] - second[0]
  })
  const result = sumArray.slice(0,k).map(function(element){
    return element[1]
  })
  return result
}

export function kSmallestPairs2(nums1: number[], nums2: number[], k: number): number[][] {
  const sumDict = {}
  nums1.forEach(function(num1){
    nums2.forEach(function(num2){
      const key: number = num1 + num2
      if (!sumDict[key]) {
        sumDict[key] = []
      }
      sumDict[key].push([num1, num2])
    })
  })
  let i = 0;
  let result = []
  Object.keys(sumDict).some(key => {
    sumDict[key].some(element => {
      result.push(element)
      i++
      if (i===k) {return true}
    })
  })
  return result.slice(0,k)
}
