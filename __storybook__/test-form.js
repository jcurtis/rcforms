import React, {Component} from 'react'
import Form, {TextInput} from '../lib'
import {required, email, combine} from '../lib/validation'

class TestForm extends Component {
  constructor (props) {
    super(props)
    this.onChange = ({valid}) => {
      this.setState({valid})
    }
    this.onSubmit = (values, fn) => {
      this.props.onSubmit(values)
      fn()
    }
    this.state = {
      valid: true
    }
  }

  render () {
    let error
    if (!this.state.valid) {
      error = (
        <p>This form has errors!</p>
      )
    }

    return (
      <section>
        <Form onSubmit={this.onSubmit} onChange={this.onChange}>
          <h1>My Test Form</h1>
          {error}

          <p>
            <label htmlFor='input1'>Input 1</label>
            <TextInput name='input1' />
          </p>

          <p>
            <label htmlFor='input2'>Input 2</label>
            <TextInput name='input2' initialValue='initial2' />
          </p>

          <p>
            <label htmlFor='input3'>Input 3</label>
            <TextInput
              name='input3'
              initialValue='initial3'
              validation={required}
            />
          </p>

          <p>
            <label htmlFor='input4'>Input 4</label>
            <TextInput
              name='input4'
              initialValue='initial4@test.com'
              validation={email}
            />
          </p>

          <p>
            <label htmlFor='input5'>Input 5</label>
            <TextInput
              name='input5'
              initialValue='initial5@test.com'
              validation={combine(required, email)}
            />
          </p>
        </Form>
      </section>
    )
  }
}

// TestForm.defaultProps = {
//   onSubmit: () => {}
// }

export default TestForm
