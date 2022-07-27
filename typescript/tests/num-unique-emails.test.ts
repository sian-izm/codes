import { expect } from 'chai'
import { numUniqueEmails } from '../src/num-unique-emails'

describe('numUniqueEmails', () => {
  it('should return 2 for all unque emails', () => {
    expect(numUniqueEmails(['sian.izm@gmail.com', 'hoge@huga.com'])).to.equal(2)
  })

  it('remove + after text, remove .', () => {
    expect(numUniqueEmails(
      ["test.email+alex@leetcode.com",
      "test.e.mail+bob.cathy@leetcode.com",
      "testemail+david@lee.tcode.com"])).to.equal(2)
  })

  it('differentiate . for domain', () => {
    expect(numUniqueEmails(
      ["testemail@leetcode.com", "testemail@leet.code.com"]
    )).to.equal(2)
  })
})
