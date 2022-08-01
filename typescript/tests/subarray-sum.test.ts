import { expect } from 'chai'
import { subarraySum } from '../src/subarray-sum'

describe('subarraySum', () => {
  it('should return 2', () => {
    expect(subarraySum([1,1,1],2)).to.equal(2)
  })
  it('should return 4', () => {
    expect(subarraySum([1,2,1,2,1],3)).to.equal(4)
  })
  it('should return 4', () => {
    expect(subarraySum([-1,-1,1],1)).to.equal(1)
  })  
})
