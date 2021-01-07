import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {
  AssetsPage,
  CompoundsPage,
  ElementsPage,
  FoundationsPage,
  OtherPage,
  WelcomePage,
} from './pages'

import PageLayout from 'Components/PageLayout'

import './styles/main.scss'

export default function App() {
  return (
    <Router>
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
    </Router>
  )
}
