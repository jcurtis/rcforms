import {required, email, combine} from '../lib/validation'

const valid = {valid: true}

test('required', () => {
  expect(required('')).toEqual({valid: false, code: 'required'})
  expect(required('input')).toEqual(valid)
})

test('email', () => {
  const error = {valid: false, code: 'email'}
  expect(email('')).toEqual(valid)
  expect(email('notanemail')).toEqual(error)
  expect(email('email@test.com')).toEqual(valid)
  expect(email('email@test,com')).toEqual(valid)
  expect(email('email@testing')).toEqual(valid)
})

test('combine', () => {
  const requiredEmail = combine(required, email)
  expect(requiredEmail('')).toEqual({valid: false, code: 'required'})
  expect(requiredEmail('test')).toEqual({valid: false, code: 'email'})
  expect(requiredEmail('test@email.com')).toEqual(valid)
})
