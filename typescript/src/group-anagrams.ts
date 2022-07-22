export function groupAnagrams(strs: string[]): string[][] {
  const hash: {[key: string]: string[]} = {}

  strs.forEach(chars => {
    const arrayChars = chars.split('')
    arrayChars.sort((first, second) => {
      return first.localeCompare(second)
    })
    const sortedChars = arrayChars.join('')
    if (!hash[sortedChars]) { hash[sortedChars] = [] }
    hash[sortedChars].push(chars)
  })

  const result: string[][] = []
  Object.keys(hash).forEach(key => {
    result.push(hash[key])
  })
  return result
}
