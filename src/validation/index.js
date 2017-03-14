// @flow
/**
  * Define standard validators for form controls
  * Must be of form function (name, label) {}
  * Must return either {valid: true} or {valid: false, message: '<error message>'}
  */

import combine from './combine'
import required from './required'
import email from './email'

export {
  combine,
  required,
  email
}
