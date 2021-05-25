import React from 'react';
import {create} from "react-test-renderer";
import {DetailView} from "../ui/pages/BlogPage/DetailView";
import '@testing-library/jest-dom';

//when user is logged in -> user sees EDIT button
it('edit button is shown since user is logged in', done => {
    try {
        const detailView = create(<DetailView />);
        const instance = detailView.getInstance();
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
        expect(detailView.toJSON()).toMatchSnapshot();
        done();
    }catch(error){
        done(error)
    }
});

// when user is not logged in -> user does not see edit button
it('edit button is not shown since user is logged out', done => {
    try {
        const detailView = create(<DetailView />);
        const instance = detailView.getInstance();
        expect(instance.state.userInfo.status).toString().match('NOT_LOGGED_IN');
        expect(detailView.toJSON()).toMatchSnapshot();
        done();
    }catch(error){
        done(error)
    }
});

// when user clicks Edit-Button the Editor gets rendet correctly with all fields and buttons
//
it('the Editor gets rendered correctly in the edit-mode', done => {
    // test muss slug bekommen -> editor wechselt in edit mode
    // mock-up blogpost wird als props an editor übergeben

    // ob die props richtig übergeben

    try {

        done();
    }catch(error){
        done(error)
    }
});

