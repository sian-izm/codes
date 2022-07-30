export function firstUniq(s: string): number {
  const uniqDict: {[key: string]: number} = {}
  const dupDict: {[key: string]: number} = {}

  s.split('').forEach((char, index: number) => {
    if (!dupDict[char]) {
      if (uniqDict[char] == null) {
        uniqDict[char] = index
      } else {
        delete uniqDict[char]
        dupDict[char] = index
      }
    }
  })

  const uniqArray = Object.keys(uniqDict).map(key => {
    return [key, uniqDict[key]]
  })
  uniqArray.sort((first, second) => {return Number(first[1]) - Number(second[1])})
  return uniqArray[0] ? Number(uniqArray[0][1]) : -1
}


export function firstUniqFor(s: string): number {
  const sArray = s.split('')
  let result = sArray.findIndex((char, index) => {
    for(let i=index+1;i<sArray.length;i++) {
      if (char === sArray[i]) {
        break
      }
      return i===(sArray.length-1)
    }
  })
  return result ? Number(result) : -1
}
