import { expect } from 'chai'
import { intersection } from '../src/intersection'

describe('intersection', () => {
  it('should return two intersected element', () => {
    expect(intersection([1,2,2,1],[2,2])).to.deep.equal([2,2])
  })
})
