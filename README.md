[![Build Status](https://travis-ci.org/jcurtis/rcforms.svg?branch=master)](https://travis-ci.org/jcurtis/rcforms)

# rcforms

rcforms is a small React library to help build forms.

## Installation

`npm install --save rcforms`

## Usage

```javascript
import React, {Component} from 'react'
import Form, {TextInput} from 'rcforms'

class MySweetForm extends Component {
  render () {
    return (
      <div>
        <h2>My Sweet Form</h2>
        <Form>
          <label htmlFor='greeting'>How Are You?</label>
          <TextInput name='greeting' />
        </Form>
      </div>
    )
  }
}

export default MySweetForm
```
