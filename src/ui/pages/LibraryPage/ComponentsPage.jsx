import React from "react";
import { Route, Switch } from "react-router-dom";

import ComponentView from "./ComponentsListView";
import ComponentsView from "./ComponentsView";

export default function ComponentsPage() {

  return (
    <>
      <Switch>
        <Route exact path="/library">
          <ComponentView />
        </Route>
        <Route exact path="/library/:slug">
            <ComponentsView />
        </Route>
      </Switch>
    </>
  );
}