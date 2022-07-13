import { expect } from 'chai'
import { KthLargest } from '../src/kth-largetst'

describe('KthLargest', () => {
  it('should return null', () => {
    const kthLargest =  new KthLargest(3, [4, 5, 8, 2])
    expect(kthLargest.add(3)).to.equal(4)
    expect(kthLargest.add(5)).to.equal(5)
    expect(kthLargest.add(10)).to.equal(5)
    expect(kthLargest.add(9)).to.equal(8)
    expect(kthLargest.add(4)).to.equal(8)
  })
})
