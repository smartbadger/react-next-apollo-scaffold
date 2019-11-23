
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import {Button} from'./quick-start'

test('it works', () => {
  const tree = renderer.create(<Button />).toJSON()
  expect(tree).toMatchSnapshot()
})