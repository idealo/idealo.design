import React from 'react'

import {
  // BrowserRouter as Router,
  StaticRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import PageLayout from 'Components/PageLayout'

import ListView from './ListView'
import DetailView from './DetailView'
import EditorView from './EditorView'

export default function BlogPage({ match }) {

  return (
    <>
      <Switch>
        <Route exact path='/blog'>
          <ListView />
        </Route>
        <Route exact path='/blog/categories/:slug'>
          <ListView />
        </Route>
        <Route path='/blog/new-post'>
          <EditorView />
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
