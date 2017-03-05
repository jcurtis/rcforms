import React from 'react'
import {storiesOf, action} from '@kadira/storybook'
import TestForm from '../test-form'

storiesOf('TestForm', module)
  .add('empty', () => (
    <TestForm onSubmit={action('onSubmit')} />
  ))
