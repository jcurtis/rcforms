import React, {Component, PropTypes} from 'react'

class TextInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: this.props.initialValue || ''
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

  _handleChange (evt) {
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
      const {valid, message} = this.props.validation(this.state.value, this.props.label)
      if (!valid && message) {
        this.setState({errorMessage: message})
      } else {
        this.setState({errorMessage: null})
      }
    }
  }

  isValid (value) {
    if (this.props.validation) {
      const {valid} = this.props.validation(value, this.props.label)
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

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  initialValue: PropTypes.string,
  validation: PropTypes.func
}

TextInput.contextTypes = {
  onChange: PropTypes.func
}

export default TextInput
