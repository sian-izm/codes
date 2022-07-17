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
})
