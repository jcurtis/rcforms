// @flow

// Combine multiple validations into one. Order matters.
// Example: combine(required, email);

import type {ValidationFunc} from '../types'

export default function combine (...funcs: ValidationFunc[]) {
  return (value: string) => {
    for (let func of funcs) {
      const res = func(value)
      if (!res.valid) {
        return res
      }
    }
    return {valid: true}
  }
}
