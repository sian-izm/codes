import { expect } from 'chai'
import { intersection } from '../src/intersection'

describe('intersection', () => {
  it('should return two intersected element', () => {
    expect(intersection([2,1,2,1],[2,2])).to.deep.equal([2])
  })

  it('should return two intersected element', () => {
    expect(intersection([2,2],[2,2,1,3])).to.deep.equal([2])
  })

  it('should return two intersected element', () => {
    expect(intersection([8,0,3],[0,0])).to.deep.equal([0])
  })
})
