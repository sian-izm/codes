import { expect } from 'chai'
import { subarraySum } from '../src/subarray-sum'

describe('subarraySum', () => {
  it('should return 2-1', () => {
    expect(subarraySum([1,1,1],2)).to.equal(2)
  })
  it('should return 4-1', () => {
    expect(subarraySum([1,2,1,2,1],3)).to.equal(4)
  })
  it('should return 1-1', () => {
    expect(subarraySum([-1,-1,1],1)).to.equal(1)
  })
  it('should return 3-1', () => {
    expect(subarraySum([-1,1,0],0)).to.equal(3)
  })
  it('should return 3-2', () => {
    expect(subarraySum([0,0],0)).to.equal(3)
  })
  it('should return 3-3', () => {
    expect(subarraySum([1,0,0],1)).to.equal(3)
  })
  it('should return 2-2', () => {
    expect(subarraySum([0,1,0],0)).to.equal(2)
  })
  it('should return 10-1', () => {
    expect(subarraySum([1,0,0,0,0],0)).to.equal(10)
  })
  it('should return 4-2', () => {
    expect(subarraySum([1,2,3,4,5,6,7,1,23,21,3,1,2,1,1,1,1,1,12,2,3,2,3,2,2],12)).to.equal(4)
  })
})
