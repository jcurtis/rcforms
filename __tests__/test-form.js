import React from 'react'
import renderer from 'react-test-renderer'
import TestForm from '../__storybook__/test-form'

test('renders TestForm', () => {
  const component = renderer.create(
    <TestForm />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
