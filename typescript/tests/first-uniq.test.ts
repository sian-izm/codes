import { expect } from 'chai'
import { firstUniq, firstUniqFor } from '../src/first-uniq'

describe('firstUniq', () => {
  it('should return 0 index', () => {
    expect(firstUniq('leetcode')).to.equal(0)
  })
  it('should return -1', () => {
    expect(firstUniq('aabb')).to.equal(-1)
  })
  it('should return 2 index', () => {
    expect(firstUniq('loveleetcode')).to.equal(2)
  })
})

describe('firstUniqFar', () => {
  it('should return 0 index', () => {
    expect(firstUniqFor('leetcode')).to.equal(0)
  })
  it('should return -1', () => {
    expect(firstUniqFor('aabb')).to.equal(-1)
  })
  it('should return 2 index', () => {
    expect(firstUniqFor('loveleetcode')).to.equal(2)
  })
})
