import React, {useEffect, useState} from 'react'

import {
    // BrowserRouter as Router,
    StaticRouter as Router,
    Switch,
    Route, Redirect,
} from "react-router-dom";


import ComponentView from './ComponentView'
import {fetchUserInfo} from "../BlogPage/data";
import ReactStackView from "./ReactStackView";
import ClassicStackView from "./ClassicStackView";

export default function ComponentsPage({ match }) {

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
                <Route exact path='/components'>
                    <ComponentView />
                </Route>
                <Route exact path='/components/for-react-stacks'>
                    <ReactStackView />
                </Route>
                <Route exact path='/components/for-classic-stacks'>
                    <ClassicStackView />
                </Route>
            </Switch>
        </>
    )
}

