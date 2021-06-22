import React, {useEffect, useState} from 'react'

import {Route, Switch,} from "react-router-dom";


import ComponentView from './ComponentView'
import {fetchUserInfo} from "../BlogPage/data";

export default function ComponentsPage({match}) {

    const [userInfo, setUserInfo] = useState([]);

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
                    <ComponentView/>
                </Route>
            </Switch>
        </>
    )
}

