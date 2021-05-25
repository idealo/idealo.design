import React from 'react';
import { create } from "react-test-renderer"
import Search from '../ui/components/Header/Search';
import { ListView } from "../ui/pages/BlogPage/ListView";

it('login renders correctly', () => {
    const loginTest = create(<Search/>);
    expect(loginTest.toJSON()).toMatchSnapshot();
});

it('logout renders correctly', done => {
    try{
        const logoutTest = create(<Search />);
        const instance = logoutTest.getInstance();
        expect(instance.state.isLoggedIn).toBe(false);
        instance.setState({isLoggedIn:true});
        expect(instance.state.isLoggedIn).toBe(true);
        expect(logoutTest.toJSON()).toMatchSnapshot();
        done();
    }catch(error){
        done(error);
    }
});

//when user is logged in -> user sees new blogpost button
it('new blogpost button is shown since user is logged in', done => {
    try {
        const listView = create(<ListView />);
        const instance = listView.getInstance();
        expect(instance.state.userInfo.status).toString().match('NOT_LOGGED_IN');
        instance.setState({userInfo: {
                "status":"LOGGED_IN",
                "user":{
                    "@odata.context":null,
                    "businessPhones":[],
                    "displayName":null,
                    "givenName":null,
                    "jobTitle":null,
                    "mail":null,
                    "mobilePhone":null,
                    "officeLocation":null,
                    "preferredLanguage":null,
                    "surname":null,
                    "userPrincipalName":null,
                    "id":null}
            }});
        expect(instance.state.userInfo.status).toString().match('LOGGED_IN');
        expect(listView.toJSON()).toMatchSnapshot();
        done();
    }catch(error){
        done(error)
    }
});

// when user is not logged in -> user does not see edit button
it('new blogpost button is not shown since user is logged out', done => {
    try {
        const listView = create(<ListView />);
        const instance = listView.getInstance();
        expect(instance.state.userInfo.status).toString().match('NOT_LOGGED_IN');
        expect(listView.toJSON()).toMatchSnapshot();
        done();
    }catch(error){
        done(error)
    }
});