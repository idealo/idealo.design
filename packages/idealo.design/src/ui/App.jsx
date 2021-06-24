import React from 'react'

import withStyles from 'isomorphic-style-loader/withStyles'

import {
  // BrowserRouter as Router,
  StaticRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {
  AssetsPage,
  BlogPage,
  CompoundsPage,
  ElementsPage,
  FoundationsPage,
  OtherPage,
  WelcomePage,
} from './pages'

import PageLayout from './components/PageLayout'

import s from './styles/main.scss'
import './styles/colors.scss'
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <PageLayout>
      <Switch>
        <Route path="/foundations/:slug?">
          <FoundationsPage />
        </Route>
        <Route path="/elements/:slug?">
          <ElementsPage />
        </Route>
        <Route path="/compounds/:slug?">
          <CompoundsPage />
        </Route>
        <Route path="/blog">
          <BlogPage />
        </Route>
        <Route path="/assets/:slug?">
          <AssetsPage />
        </Route>
        <Route path="/other/:slug?">
          <OtherPage />
        </Route>
        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
      <CookieConsent
          debug={false}
          location="bottom"
          style={{ background: '#395F86'}}
          buttonStyle={{ color: '#D7E3EF', background: '#ff6600', fontSize: '16px'}}
      >
        This site uses cookies. See our <a href="https://www.idealo.co.uk/privacypolicy.html">privacy policy</a> for more.</CookieConsent>
    </PageLayout>
  )
}

export default withStyles(s)(App)
