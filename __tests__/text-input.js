import React from 'react'
import renderer from 'react-test-renderer'
import {TextInput} from '../lib/index.js'

test('TextInput renders', () => {
  const component = renderer.create(
    <TextInput />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
