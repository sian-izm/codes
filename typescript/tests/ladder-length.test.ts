import { expect } from 'chai'
import { ladderLength } from '../src/ladder-length'

describe('ladderLength', () => {
  it('should return 5', () => {
    expect(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log","cog"])).to.equal(5)
  })
  it('should return 0', () => {
    expect(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log"])).to.equal(0)
  })
})
