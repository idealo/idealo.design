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
    WelcomePage,
    LandingPage
} from './pages'
import PageLayout from './components/PageLayout'
import s from './styles/main.scss'
import './styles/colors.scss'
import CookieConsent from "react-cookie-consent";
import ErrorPage from "./components/ErrorPage/ErrorPage";
function App() {
    return (
        <PageLayout>
            <Switch>
                <Route path="/error" >
                    <ErrorPage/>
                </Route>
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
                <Route path="/welcome">
                    <WelcomePage/>
                </Route>
                <Route path="/">
                    <LandingPage/>
                </Route>
            </Switch>
            <CookieConsent enableDeclineButton flipButtons
                           debug={false}
                           buttonText={"I Agree"}
                           location="bottom"
                           style={{ background: '#0A3761',fontFamily: 'Roboto, sans-serif'}}buttonStyle={{ color: 'white', background: '#0771D0', fontSize: '16px', fontFamily: 'Roboto, sans-serif', borderRadius: '4px', padding:'10px'}}
                           onAccept={() => {
                      gtag('consent', 'update', {
                          'ad_storage':'granted',
                          'analytics_storage':'granted'
                      })
                           }}
                           declineButtonText={"I Disagree"}
                           declineButtonStyle={{ color: 'white', fontSize: '16px', fontFamily: 'Roboto, sans-serif', borderRadius: '4px', padding:'10px'}}> This site uses cookies. See our <a style={{color:'white'}} href="https://www.idealo.co.uk/privacypolicy.html">privacy policy</a> for more.
            </CookieConsent>
        </PageLayout>
    )
}

export default withStyles(s)(App)