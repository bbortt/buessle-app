import React from 'react'

import { shallow } from 'enzyme'
import RootClass from '../src/pages/_app'

describe('RootClass', () => {
  it('renders child with props', () => {
    const child = props => <h1>{props.testProp}</h1>
    const testProp = 'a-very-unique-test-prop'

    const rootApp = shallow(
      <RootClass Component={child} pageProps={{ testProp }} />
    )

    expect(rootApp.html()).to.equal(
      `<div id="root" class="container"><div id="cookie-consent" class="reveal" data-reveal="true" data-overlay="false"><h1>ACHTUNG GÜEZIS!</h1><p>Die Website muessech ebe chli öpis über di merke. I welem Spiel du bisch, zum Bispiel. O
der wiene herte Siech du bisch. Aber daderzue müesstisch du die sogenannte Cookies akzeptiere. Bitte mach doch das, bevor du mit dem grandiose Spiel witer machsch :))</p><button type="button" class="button float-right">Also halt, gimer
 die Güezis</button></div><h1>${testProp}</h1></div>`
    )
  })
})
