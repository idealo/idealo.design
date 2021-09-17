import React from 'react'

import withStyles from 'isomorphic-style-loader/withStyles'

import {Route, Switch,} from "react-router-dom";

import {
    AssetsPage,
    BlogPage,
    LibraryPage,
    MoleculesPage,
    AtomsPage,
    OrganismsPage,
    FoundationsPage,
    OtherPage,
    WelcomePage
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
                    <FoundationsPage/>
                </Route>
                <Route path="/atoms/:slug?">
                    <AtomsPage/>
                </Route>
                <Route path="/molecules/:slug?">
                    <MoleculesPage/>
                </Route>
                <Route path="/organisms/:slug?">
                    <OrganismsPage/>
                </Route>     
                <Route path="/library/:slug?">
                    <LibraryPage/>
                </Route>
                <Route path="/blog">
                    <BlogPage/>
                </Route>
                <Route path="/assets/:slug?">
                    <AssetsPage/>
                </Route>
                <Route path="/other/:slug?">
                    <OtherPage/>
                </Route>
                <Route path="/">
                    <WelcomePage/>
                </Route>
            </Switch>
            <CookieConsent
              debug={false}
              location="bottom"
              style={{ background: '#0A3761',fontFamily: 'Roboto, sans-serif'}}
              buttonStyle={{ color: 'white', background: '#0771D0', fontSize: '16px', fontFamily: 'Roboto, sans-serif', borderRadius: '4px', padding:'10px', margin: '15px 30px'}}
              onAccept={(acceptedByOnClick) => {
                  if (acceptedByOnClick) {
                      gtag('consent', 'update', {
                          'analytics_storage': 'granted'
                      })
                  }
              }}
            > This site uses cookies. See our <a style={{color:'white'}} href="https://www.idealo.co.uk/privacypolicy.html">privacy policy</a> for more.</CookieConsent>
        </PageLayout>
    )
}

export default withStyles(s)(App)
