import { expect } from 'chai'
import { groupAnagrams } from '../src/group-anagrams'

describe('groupAnagrams', () => {
  it('should return 3 string types', () => {
    expect(groupAnagrams(["eat","tea","tan","ate","nat","bat"])).to.deep.equal([["eat","tea","ate",],["tan","nat"],["bat"]])
  })
})
