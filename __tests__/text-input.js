import React from 'react'
import renderer from 'react-test-renderer'
import Form, {TextInput} from '../lib/index.js'

test('TextInput renders', () => {
  const component = renderer.create(
    <TextInput />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('TextInput renders with props', () => {
  const component = renderer.create(
    <TextInput
      name='name'
      readOnly
    />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('TextInput renders inside a Form', () => {
  const component = renderer.create(
    <Form>
      <TextInput />
    </Form>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('TextInput is composable', () => {
  function ComposedInput ({label}) {
    return (
      <div className='composed'>
        <span>{label}</span>
        <TextInput />
      </div>
    )
  }
  const component = renderer.create(
    <Form>
      <h1>My Form</h1>
      <ComposedInput label='Composable' />
    </Form>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
