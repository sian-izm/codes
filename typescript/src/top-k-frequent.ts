export function topKFrequent(nums: number[], k: number): any {

  const numsFromLargestCount: {[key: number]: number} = {}
  nums.forEach(function(value) {
    numsFromLargestCount[value] = (numsFromLargestCount[value] || 0) + 1
  })
  var resArray = Object.keys(numsFromLargestCount).map(function(key) {
    return [key, numsFromLargestCount[key]]
  })
  resArray.sort(function(first, second){
    return second[1] - first[1]
  }) 
  return resArray.slice(0,k).map(function(element) {
    return Number(element[0])
  })
}
