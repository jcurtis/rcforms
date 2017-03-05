
// Combine multiple validations into one. Order matters.
// Example: combine(required, email);
export default function combine (...funcs) {
  return (value) => {
    for (let func of funcs) {
      const res = func(value)
      if (!res.valid) {
        return res
      }
    }
    return {valid: true}
  }
}
