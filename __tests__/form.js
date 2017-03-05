import React from 'react'
import renderer from 'react-test-renderer'
import Form from '../lib/index.js'

test('Form renders', () => {
  const component = renderer.create(
    <Form />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
