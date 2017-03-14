// @flow
import React, {Component, PropTypes} from 'react'
import type {ValidationFunc} from '../types'

type Props = {
  name: string,
  initialValue: string,
  validation: ValidationFunc
}

class TextInput extends Component {
  props: Props

  state: {
    value: string,
    errorMessage: ?string
  }

  _handleChange: () => void
  _handleBlur: () => void
  isValid: (value: string) => boolean

  constructor (props: Props) {
    super(props)
    this.state = {
      value: this.props.initialValue || '',
      errorMessage: null
    }
    this._handleChange = this._handleChange.bind(this)
    this._handleBlur = this._handleBlur.bind(this)
    this.isValid = this.isValid.bind(this)
  }

  componentDidMount () {
    if (this.context.onChange) {
      this.context.onChange({
        name: this.props.name,
        value: this.state.value,
        valid: this.isValid(this.state.value)
      }, true)
    }
  }

  render () {
     // Pull out non input attributes
    const {
      /* eslint-disable no-unused-vars */
      initialValue,
      validation,
      /* eslint-enable no-unused-vars */
      ...restProps
    } = this.props
    return (
      <input
        {...restProps}
        type='text'
        value={this.state.value}
        onChange={this._handleChange}
        onBlur={this._handleBlur}
      />
    )
  }

  _handleChange (evt: any) {
    this.setState({value: evt.target.value})
    if (this.context.onChange) {
      this.context.onChange({
        name: this.props.name,
        value: evt.target.value,
        valid: this.isValid(evt.target.value)
      })
    }
  }

  _handleBlur () {
    if (this.props.validation) {
      const {valid, code} = this.props.validation(this.state.value)
      if (!valid) {
        this.context.onChange({valid, code})
      }
    }
  }

  isValid (value: string) {
    if (this.props.validation) {
      const {valid} = this.props.validation(value)
      return valid
    }
    return true
  }

  getValue () {
    return {
      name: this.props.name,
      value: this.state.value
    }
  }
}

TextInput.contextTypes = {
  onChange: PropTypes.func
}

export default TextInput
