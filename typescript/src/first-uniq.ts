export function firstUniq(s: string): number {
  const uniqDict: {[key: string]: number} = {}
  const dupDict: {[key: string]: number} = {}

  s.split('').forEach((char, index) => {
    if (!dupDict[char]) {
      console.log(char)
      console.log(uniqDict)
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
