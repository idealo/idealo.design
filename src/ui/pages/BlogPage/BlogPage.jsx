import React from "react";
import { Route, Switch } from "react-router-dom";

import ListView from "./ListView";
import DetailView from "./DetailView";
import EditorView from "./EditorView";

export default function BlogPage() {

  return (
    <>
      <Switch>
        <Route exact path="/blog">
          <ListView />
        </Route>
        <Route exact path="/blog/categories/:slug">
          <ListView />
        </Route>
        <Route exact path="/blog/new-post">
          <EditorView />
        </Route>
        <Route exact path="/blog/:slug/edit">
          <EditorView />
        </Route>
        <Route path="/blog/:slug">
          <DetailView />
        </Route>
      </Switch>
    </>
  );
}