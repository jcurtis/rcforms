// @flow
export type ValidationFunc = (value: string) => {
  valid: boolean,
  code: string
}
