// @flow
export default function required (value: string) {
  if (value && value.length > 0) {
    return {valid: true}
  }
  return {
    valid: false,
    code: 'required'
  }
}
