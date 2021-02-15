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

import PageLayout from 'Components/PageLayout'

import s from './styles/main.scss'
import './styles/colors.scss'

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
    </PageLayout>
  )
}

export default withStyles(s)(App)