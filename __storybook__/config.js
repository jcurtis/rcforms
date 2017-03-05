import {configure} from '@kadira/storybook'

function loadStories () {
  require('./stories/index.js')
  require('./stories/test-form.js')
}

configure(loadStories, module)
