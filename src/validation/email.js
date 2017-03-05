// https://davidcel.is/posts/stop-validating-email-addresses-with-regex/
const reg = /@/

export default function email (value) {
  if (!value ||
    value === '' ||
    (typeof value === 'string' && reg.test(value))
  ) {
    return {valid: true}
  }
  return {
    valid: false,
    code: 'email'
  }
}
