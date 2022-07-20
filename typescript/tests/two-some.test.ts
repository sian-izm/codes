import { expect } from 'chai'
import { twoSome } from '../src/two-some'

describe('twoSome', () => {
  it('should return 0,1 indice', () => {
    expect(twoSome([2,7,11,15],9)).to.deep.equal([0,1])
  })
  it('should return 2,3 indice', () => {
    expect(twoSome([2,7,11,15],26)).to.deep.equal([2,3])
  })
})
