import React, { useEffect, useState } from "react";

import { Route, Switch } from "react-router-dom";

import ComponentView from "./ComponentsListView";
import { fetchUserInfo } from "../BlogPage/data";
import ReactStackView from "./ReactStackView";
import ClassicStackView from "./ClassicStackView";
import ComponentsDetailView from "./ComponentsDetailView";

export default function ComponentsPage({ match }) {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetchUserInfo().then(setUser);
  });

  const setUser = (user) => {
    setUserInfo(user);
  };

  return (
    <>
      <Switch>
        <Route exact path="/components">
          <ComponentView />
        </Route>
        <Route exact path="/components/for-react-stacks">
          <ReactStackView />
        </Route>
        <Route exact path="/components/for-classic-stacks">
          <ClassicStackView />
        </Route>
        <Route path="/components/:slug">
          <ComponentsDetailView />
        </Route>
      </Switch>
    </>
  );
}
