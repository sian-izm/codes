export function numUniqueEmails(emails: string[]): number {
  const uniqEmails: {[key: string]: number} = {}
  emails.forEach(email => {
    const splitedEmail = email.split('@')
    const n = splitedEmail[0].indexOf('+')
    const name = splitedEmail[0].substring(0, n !== -1 ? n : splitedEmail[0].length).split('.').join('')
    const uniqEmail = name + '@' + splitedEmail[1]
    uniqEmails[uniqEmail] = 1
  })
  return Object.keys(uniqEmails).length
}
