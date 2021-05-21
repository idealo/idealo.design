import React from 'react';
import {fireEvent, render, screen} from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import Search from '../ui/components/Header/Search';
import { fetchUserInfo } from "../ui/pages/BlogPage/data";

jest.mock('../ui/pages/BlogPage/data', () => {
    return { fetchUserInfo: jest.fn() };
});

test('mocks the login process', async () => {
    const userInfo = {
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
    }
    fetchUserInfo.mockReturnValue({userInfo})

    //the component gets rendered
    render(<Search />)

    //login button is not there
    const loginButton = screen.getByTitle("loginButton");
    expect(loginButton).not.toBeInTheDocument();

    //user clicks on login button
    fireEvent.click(loginButton);

    //a login prompt is shown

    //this test should fail!!!
});

/*
test('mocks the logout process', async () => {
    const userInfo = {
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
    }
    fetchUserInfo.mockResolvedValueOnce({ results: userInfo })

    //the component gets rendered
    render(<Search />)

    //login button is there
    const loginButton = screen.getByTitle("loginButton");
    expect(loginButton).toBeInTheDocument();

    //user clicks on login button
    fireEvent.click(loginButton);

    //a login prompt is shown

    //do other magic here
})*/
