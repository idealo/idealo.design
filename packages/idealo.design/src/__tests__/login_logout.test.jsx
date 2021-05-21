import React from 'react';
import {fireEvent, render, screen, waitFor, waitForElementToBeRemoved} from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import Search from '../ui/components/Header/Search';
import { fetchUserInfo } from "../ui/pages/BlogPage/data";

jest.mock('../ui/pages/BlogPage/data', () => {
    return { fetchUserInfo: jest.fn() };
});

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
    fetchUserInfo.mockReturnValue(userInfo)

    render(<Search />)

    //login button is not there
    await waitForElementToBeRemoved(() => screen.getByTitle("loginButton"));

    //fetch the logout button
    const logoutButton = screen.getByTitle("logoutButton");

    //simulate user clicking on the logout button
    fireEvent.click(logoutButton);

    //expects logout button to be removed
    // await waitForElementToBeRemoved(() => logoutButton);

    //expects login to be there
    expect(screen.getByTitle("loginButton")).toBeInTheDocument();
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
