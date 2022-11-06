import { expect } from 'chai'
import { lengthOfLIS } from "../src/length-of-lis"

describe('lenghtOfLIS', () => {
  // it('should return 4 with nominal case', () => {
  //   expect(lengthOfLIS([10,9,2,5,3,7,101,18])).to.equal(4)
  // })

  it('should return 4 with 0', () => {
    expect(lengthOfLIS([0,1,0,3,2,3])).to.equal(4)
  })

  // it('should return 1 with same number array', () => {
  //   expect(lengthOfLIS([7,7,7,7,7,7])).to.equal(1)
  // })
})
