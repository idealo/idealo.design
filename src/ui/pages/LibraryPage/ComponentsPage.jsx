import React from "react";
import { Route, Switch } from "react-router-dom";

import ComponentView from "./ComponentsListView";
import ComponentsView from "./ComponentsView";
import EditorView from "./EditorView";

export default function ComponentsPage() {

  return (
    <>
      <Switch>
        <Route exact path="/library">
          <ComponentView />
        </Route>
        <Route exact path="/library/for-react-stacks">
          <ComponentView />
        </Route>
        <Route exact path= "/library/new-component">
          <EditorView/>
        </Route>
        <Route exact path="/library/for-classic-stacks">
          <ComponentView />
        </Route>
        <Route exact path="/library/:slug">
            <ComponentsView />
        </Route>
        {/*<Route exact path= "/library/:slug/edit">
          <EditorView/>
        </Route>*/}
      </Switch>
    </>
  );
}