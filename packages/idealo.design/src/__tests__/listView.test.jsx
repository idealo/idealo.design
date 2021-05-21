import {fetchUserInfo} from "../ui/pages/BlogPage/data";
import {getByText, getByTitle, render, screen, waitFor, waitForElementToBeRemoved} from "@testing-library/react";
import {ListView} from "../ui/pages/BlogPage/ListView";
import React from "react";

jest.mock('../ui/pages/BlogPage/data', () => {
    return { fetchUserInfo: jest.fn() };
});

test('mocks the new post button in listview', async () => {
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

    render(<ListView />)

    await waitFor(() => {
        //const newPostButton = screen.getByTitle("newPostButton");
        expect(screen.getByText("New Post")).toBeInTheDocument();
    })

    // await waitForElementToBeRemoved(() => screen.getByTitle("newPostButton"));
});