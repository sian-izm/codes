import { expect } from 'chai'
import { topKFrequent } from '../src/top-k-frequent'

describe('topKFrequent', () =>{
  it('should return largest number element', () => {
    expect(topKFrequent([1,1,1,2,2,3], 1)).to.deep.equal([1])
  })
})
