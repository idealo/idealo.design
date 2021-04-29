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
import ProtectedRoute from "./protectedRoute";
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
        <Route exact path="/blog/new-post">
          {userInfo.status === 'LOGGED_IN' ?
              <EditorView/>
          :
              <Redirect to='/blog'/>
          }
        </Route>
        <Route path='/blog/:slug/edit'>
          <EditorView />
        </Route>
        <Route path='/blog/:slug'>
          <DetailView />
        </Route>
      </Switch>
    </>
  )
}
