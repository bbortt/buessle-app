import React from 'react'

import { shallow } from 'enzyme'
import RootClass from '../src/pages/_app'

describe('RootClass', () => {
  it('renders child with props', () => {
    const child = (props) => <h1>{props.testProp}</h1>
    const testProp = 'a-very-unique-test-prop'

    const rootApp = shallow(
      <RootClass Component={child} pageProps={{ testProp }} />
    )

    expect(rootApp.find('div')).to.have.id('root')
    expect(rootApp.find('div')).to.have.className('container')
  })
})
