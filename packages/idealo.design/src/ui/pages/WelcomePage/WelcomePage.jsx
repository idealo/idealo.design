import React from 'react'
import CookieConsent from "react-cookie-consent";

import MainContent from 'Components/MainContent'
import content from './content.json'

function RenderElement(props) {
  const elem = props.elem

  switch (elem.type) {
  case 'p':
    return <p dangerouslySetInnerHTML={{ __html: elem.content }} />
  case 'h1':
    return <h1 dangerouslySetInnerHTML={{ __html: elem.content }} />
  case 'h2':
    return <h2 dangerouslySetInnerHTML={{ __html: elem.content }} />
  case 'h3':
    return <h3 dangerouslySetInnerHTML={{ __html: elem.content }} />
  case 'h4':
    return <h4 dangerouslySetInnerHTML={{ __html: elem.content }} />
  case 'h5':
    return <h5 dangerouslySetInnerHTML={{ __html: elem.content }} />
  case 'img':
    return <img src={elem.src} />
  }
}

export default function WelcomePage(props) {

  const { elements } = content

  return (
    <>
      <CookieConsent
          debug={true}
          location="bottom"
          style={{ background: '#395F86'}}
          buttonStyle={{ color: '#D7E3EF', background: '#ff6600', fontSize: '16px'}}
      >
        This site uses cookies. See our <a href="/privacy">privacy policy</a> for more.</CookieConsent>
      {elements.map((elem, idx) => <RenderElement key={idx} elem={elem}/>)}
    </>
  )
}
