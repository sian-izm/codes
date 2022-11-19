import { expect } from 'chai'
import { maxSubArray } from '../src/max-sub-array'

describe('maxSubArray',() => {
  it('should return 4 ', () => {
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).to.deep.equal(6)
  })
})
