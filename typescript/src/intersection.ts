export function intersection(nums1: number[], nums2: number[]): number[] {
  const unique = (array => {
    let result = array.filter((value, index) => {
      return array.indexOf(value) === index
    })
    return result.sort((first, second) => { return first - second })
  })
  const uniqNums1 = unique(nums1)
  const uniqNums2 = unique(nums2)
  const result = []
  let ai = 0
  let bi = 0
  while (ai < uniqNums1.length, bi < uniqNums2.length ) {
    if (uniqNums1[ai] < uniqNums2[bi]) { ai++ }
    else if (uniqNums2[bi] < uniqNums1[ai]) { bi++ }
    else  {
      if (uniqNums1[ai]) {
        result.push(uniqNums1[ai])
      }
      ai++
      bi++
    }
  }
  return result
}
