import { expect } from 'chai'
import { numUniqueEmails } from '../src/num-unique-emails'

describe('numUniqueEmails', () => {
  it('should return 2 for all unque emails', () => {
    expect(numUniqueEmails(['sian.izm@gmail.com', 'hoge@huga.com'])).to.equal(2)
  })
})
