import {fetchUserInfo} from "../ui/pages/BlogPage/data";
import {render, screen, waitFor, waitForElementToBeRemoved} from "@testing-library/react";
import {ListView} from "../ui/pages/BlogPage/ListView";
import '@testing-library/jest-dom/extend-expect';
import React from "react";

jest.mock('../ui/pages/BlogPage/data', () => {
    return { fetchUserInfo: jest.fn()};
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

    const mockedParams = {
        match: { params: { slug: 'whatever-id' } }
    };
    fetchUserInfo.mockReturnValue(userInfo)

    //render(<ListView />)
    render(<ListView {...mockedParams} />)

    await waitFor(() => {
        const newPostButton = screen.getByTitle("newPostButton");
        expect(newPostButton).toBeInTheDocument();
    })


    // await waitForElementToBeRemoved(() => screen.getByTitle("newPostButton"));
})