import React, { useEffect, useState } from "react";

import {Redirect, Route, Switch} from "react-router-dom";

import ComponentView from "./ComponentsListView";
import { fetchUserInfo } from "../BlogPage/data";
import ComponentsDetailView from "./ComponentsDetailView";
import EditorView from "../BlogPage/EditorView";
import ComponentsView from "./ComponentsView";

export default function ComponentsPage({ match }) {
  const [userInfo, setUserInfo] = useState([]);

  // useEffect(() => {
  //   fetchUserInfo().then(setUserInfo);
  // }, [userInfo]);

  return (
    <>
      <Switch>
        <Route exact path="/library">
          <ComponentView />
        </Route>
        <Route exact path="/library/for-react-stacks">
          <ComponentView />
        </Route>
        <Route exact path="/library/for-classic-stacks">
          <ComponentView />
        </Route>
        <Route exact path="/library/:slug">
          {userInfo.status === "NOT_LOGGED_IN" ? (
              <Redirect to="/library" />
          ) : (
              <ComponentsView />
          )}
          <Route />
        </Route>
      </Switch>
    </>
  );
}
