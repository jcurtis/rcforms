import {reduce, every} from 'lodash'
import React, {Component, PropTypes} from 'react'

// Components
import TextInput from './inputs/text-input'
// import TextAreaControl from './text-area-control';
// import SubmitButton from '../../submit-button';

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
    // let submit;
    // if (this.props.onSubmit) {
    //   submit = (
    //     <div className="row">
    //       <SubmitButton
    //         onClick={this._handleSubmit}
    //         processing={this.state.isSubmitting}
    //         label={_t('Save')}
    //         altLabel={_t('Saving')}
    //         style="primary"
    //         disabled={this.props.disabled || !this.state.valid}
    //       />
    //     </div>
    //   );
    // }
    return (
      <form className='form' role='form' onSubmit={this.props.onSubmit} noValidate>
        {this.props.children}
        {/* {submit} */}
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

    const newState = {
      values,
      valid: every(values, val => val.valid)
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
    return reduce(this.state.values, (values, valueObj, name) => {
      return {
        ...values,
        [name]: valueObj.value
      }
    }, {})
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func, // Requires a callback for spinner
  children: PropTypes.any.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
}

Form.childContextTypes = {
  onChange: PropTypes.func
}

export default Form
