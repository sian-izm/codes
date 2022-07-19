import { expect } from 'chai'
import { kSmallestPairs, kSmallestPairs2 } from '../src/k-smallest-pairs'

describe('kSmallestPairs', () => {
  it('should return 3 smallest patterns-1', () => {
    expect(kSmallestPairs([1,7,11],[2,4,6],3)).to.deep.equal([[1,2],[1,4],[1,6]])
  })
  it('should return 2 smallest patterns', () => {
    expect(kSmallestPairs([1,1,2],[1,2,3],2)).to.deep.equal([[1,1],[1,1]])
  })
  it('should return 3 smallest patterns-2', () => {
    expect(kSmallestPairs([1,2],[3],2)).to.deep.equal([[1,3],[2,3]])
  })
  // it('should return 3 smallest patterns-3', () => {
  //   expect(kSmallestPairs([-10,-4,0,0,6],[3,5,6,7,8,100],10)).to.deep.equal([[-10,3],[-10,5],[-10,6],[-10,7],[-10,8],[-4,3],[-4,5],[-4,6],[0,3],[0,3]])
  // })
})

describe('kSmallestPairs2', () => {
  it('should return 3 smallest patterns-1', () => {
    expect(kSmallestPairs2([1,7,11],[2,4,6],3)).to.deep.equal([[1,2],[1,4],[1,6]])
  })
  it('should return 2 smallest patterns', () => {
    expect(kSmallestPairs2([1,1,2],[1,2,3],2)).to.deep.equal([[1,1],[1,1]])
  })
  it('should return 3 smallest patterns-2', () => {
    expect(kSmallestPairs2([1,2],[3],2)).to.deep.equal([[1,3],[2,3]])
  })
  // it('should return 3 smallest patterns-3', () => {
  //   expect(kSmallestPairs2([-10,-4,0,0,6],[3,5,6,7,8,100],10)).to.deep.equal([[-10,3],[-10,5],[-10,6],[-10,7],[-10,8],[-4,3],[-4,5],[-4,6],[0,3],[0,3]])
  // })
})
