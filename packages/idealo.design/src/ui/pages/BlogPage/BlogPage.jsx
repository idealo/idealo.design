import React, {useEffect, useState} from 'react'

import {
  // BrowserRouter as Router,
  StaticRouter as Router,
  Switch,
  Route, Redirect,
} from "react-router-dom";

import PageLayout from 'Components/PageLayout'

import ListView from './ListView'
import DetailView from './DetailView'
import EditorView from './EditorView'
import {fetchUserInfo} from "./data";

export default function BlogPage({ match }) {

  const [ userInfo, setUserInfo ] = useState([]);

  useEffect(() => {
    fetchUserInfo().then(setUser);
  });

  const setUser = (user) => {
    setUserInfo(user);
  }

  return (
    <>
      <Switch>
        <Route exact path='/blog'>
          <ListView />
        </Route>
        <Route exact path='/blog/categories/:slug'>
          <ListView />
        </Route>
        <Route exact path = "/blog/new-post">
          {userInfo.status === 'NOT_LOGGED_IN' ?
              <Redirect to = '/blog'/>
          :
            <EditorView/>
          }
        </Route>
        <Route exact path = "/blog/:slug/edit">
          {userInfo.status === 'NOT_LOGGED_IN' ?
              <Redirect to = '/blog'/>
              :
              <EditorView/>
          }
        </Route>
        <Route path='/blog/:slug'>
          <DetailView />
        </Route>
      </Switch>
    </>
  )
}
