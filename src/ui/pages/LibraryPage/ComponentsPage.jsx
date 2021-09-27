import React, { useEffect, useState } from "react";

import { Route, Switch } from "react-router-dom";

import ComponentView from "./ComponentsListView";
import { fetchUserInfo } from "../BlogPage/data";
import ComponentsDetailView from "./ComponentsDetailView";

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
        <Route path="/library/:slug">
          <ComponentsDetailView />
        </Route>
      </Switch>
    </>
  );
}
