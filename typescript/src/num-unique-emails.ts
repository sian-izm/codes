export function numUniqueEmails(emails: string[]): number {
  const uniqEmails: {[key: string]: number} = {}
  emails.forEach(email => {
    const splitedEmail = email.split('@')
    console.log(splitedEmail)
    const n = splitedEmail[0].indexOf('+')
    const name = splitedEmail[0].substring(0, n !== -1 ? n : splitedEmail[0].length)
    uniqEmails[name] = 1
  })
  console.log(uniqEmails)
  return Object.keys(uniqEmails).length
}
