import React from 'react';
import { getByTitle,
    render,
    screen,
    waitFor,
} from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import { DetailView } from "../../ui/pages/BlogPage/DetailView";
import { fetchUserInfo, fetchSinglePost } from "../../ui/pages/BlogPage/data";

jest.mock('../../ui/pages/BlogPage/data', () => {
    return { fetchUserInfo: jest.fn(), fetchSinglePost: jest.fn() };
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
    fetchUserInfo.mockReturnValue(userInfo)
    fetchSinglePost.mockReturnValue(userInfo)
    const mockedParams = {
        route: { params: { currentBid: 'whatever-id' } },
        match: { params: { slug: 'whatever-id' } },
        navigation: ''
    };

    render(<DetailView {...mockedParams} />)

    //edit button is there
    await waitFor(() => {
        expect(screen.getByTitle("editButton")).toBeInTheDocument()
    })
})
