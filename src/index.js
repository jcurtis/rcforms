import React, {Component, PropTypes} from 'react'

// Components
import TextInput from './inputs/text-input'

// Valid Input Controls
export {
  TextInput
}

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isSubmitting: false,
      values: {},
      valid: true
    }
    this.setupValues = {}
    this._handleSubmit = this._handleSubmit.bind(this)
    this._onChange = this._onChange.bind(this)
  }

  getChildContext () {
    return {
      onChange: this._onChange
    }
  }

  render () {
    let submit
    if (this.props.onSubmit) {
      submit = (
        <button onClick={this._handleSubmit}>
          Submit
        </button>
      )
    }
    return (
      <form className='form' role='form' noValidate>
        {this.props.children}
        {submit}
      </form>
    )
  }

  _onChange (valueObj, setup) {
    let validValue = true
    if (typeof valueObj.valid === 'boolean') {
      validValue = valueObj.valid
    }
    let values = setup ? this.setupValues : this.state.values
    values = {
      ...values,
      [valueObj.name]: {
        value: valueObj.value,
        valid: validValue
      }
    }
    if (setup) {
      this.setupValues = values
    }
    const valKeys = Object.keys(values)
    const newState = {
      values,
      valid: valKeys.every(key => values[key].valid)
    }
    this.setState(newState)
    if (this.props.onChange) {
      this.props.onChange(newState)
    }
  }

  _handleSubmit (evt) {
    evt.preventDefault()
    if (this.state.valid) {
      this.setState({isSubmitting: true})
      this.props.onSubmit(this.getValues(), () => {
        this.setState({isSubmitting: false})
      })
    }
  }

  getValues () {
    return Object.keys(this.state.values)
      .reduce((acc, key) => {
        return {
          ...acc,
          [key]: this.state.values[key].value
        }
      }, {})
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func, // Requires a callback for spinner
  children: PropTypes.any,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
}

Form.childContextTypes = {
  onChange: PropTypes.func
}

export default Form
