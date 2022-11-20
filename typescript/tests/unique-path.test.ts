import { expect } from 'chai'
import { uniquePaths } from '../src/unique-paths'

describe('uniquePaths', () => {
  it('should be return 28 with 3,7', () => {
    expect(uniquePaths(3,7)).to.equal(28)
  })
})
