import { expect } from 'chai'
import { numIslans } from '../src/num-islands'

describe('numIsland', () => {
  it('should return 1', () => {
    expect(numIslans([['1']])).to.equal(1)
  })
})
