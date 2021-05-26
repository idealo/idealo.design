import React from 'react';
import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import Search from '../ui/components/Header/Search';
import { fetchUserInfo } from "../ui/pages/BlogPage/data";

jest.mock('../ui/pages/BlogPage/data', () => {
    return { fetchUserInfo: jest.fn() };
});

test('the user can see the logout button when logged in', async () => {
    const userInfo = {
        "status":"LOGGED_IN",
        "user":{
            "@odata.context":null,
            "businessPhones":[],
            "displayName":"Jane",
            "givenName":null,
            "jobTitle":null,
            "mail":null,
            "mobilePhone":null,
            "officeLocation":null,
            "preferredLanguage":null,
            "surname":"Public",
            "userPrincipalName":null,
            "id":null}
    }
    fetchUserInfo.mockReturnValue(userInfo)

    render(<Search />)

    await waitForElementToBeRemoved(() => screen.getByTitle("loginButton"));
    expect(screen.getByTitle("logoutButton")).toBeInTheDocument();

    await waitFor(() => {
        expect(screen.getByText("JP")).toBeInTheDocument()
    })
});

test('verify that the user sees the login button', async () => {
    const userInfo = {
        "status":"NOT_LOGGED_IN",
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

    render(<Search />)

    expect(screen.getByTitle("loginButton")).toBeInTheDocument();
})
