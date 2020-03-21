// @flow
import React from 'react'

import Cookies from 'universal-cookie'
import updateFoundation from '../../foundation/updateFoundation'

const cookies = new Cookies()
const COOKIE_CONSENT_COOKIE_NAME = 'buessle-app-cookie-consent'

type consentState = {
  accepted: boolean,
}

export class CookieConsent extends React.Component<{}, consentState> {
  constructor(props: {}) {
    super(props)

    this.state = {
      accepted: cookies.get(COOKIE_CONSENT_COOKIE_NAME) !== undefined,
    }
  }

  componentDidMount = () => {
    const { accepted } = this.state

    if (!accepted) {
      updateFoundation('#cookie-consent')
      // $FlowFixMe
      $('#cookie-consent').foundation('open')
    }
  }

  acceptCookies = () => {
    cookies.set(COOKIE_CONSENT_COOKIE_NAME, { accepted: new Date() })
    this.setState({ accepted: true }, () => {
      // $FlowFixMe
      $('#cookie-consent').foundation('close')
    })
  }

  render() {
    return (
      <div
        id="cookie-consent"
        className="reveal"
        data-reveal
        data-overlay="false"
      >
        <h1>ACHTUNG GÜEZIS!</h1>
        <p>
          Die Website muessech ebe chli öpis über di merke. I welem Spiel du
          bisch, zum Bispiel. Oder wiene herte Siech du bisch. Aber daderzue
          müesstisch du die sogenannte Cookies akzeptiere. Bitte mach doch das,
          bevor du mit dem grandiose Spiel witer machsch :))
        </p>
        <button
          type="button"
          className="button float-right"
          onClick={this.acceptCookies}
        >
          Also halt, gimer die Güezis
        </button>
      </div>
    )
  }
}

export default CookieConsent
