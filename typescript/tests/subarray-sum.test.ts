import { expect } from 'chai'
import { subarraySum } from '../src/subarray-sum'

describe('subarraySum', () => {
  it('should return 2', () => {
    expect(subarraySum([1,1,1],2)).to.equal(2)
  })
})
