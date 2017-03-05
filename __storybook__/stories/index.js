import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Form, {TextInput} from '../../lib'

storiesOf('Form', module)
  .add('empty', () => (
    <Form />
  ))
  .add('text input', () => (
    <Form>
      <TextInput />
    </Form>
  ))
