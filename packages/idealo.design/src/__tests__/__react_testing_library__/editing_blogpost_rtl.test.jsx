import React from 'react';
import {
    fireEvent, getByTitle,
    render,
    screen,
    waitFor,
} from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import { DetailView } from "../../ui/pages/BlogPage/DetailView";
import { fetchUserInfo, fetchSinglePost } from "../../ui/pages/BlogPage/data";
import { RichTextEditor } from "../../ui/pages/BlogPage/Editor/Editor";

jest.mock('../../ui/pages/BlogPage/data', () => {
    return { fetchUserInfo: jest.fn(), fetchSinglePost: jest.fn(), fetchDistinctCategories: jest.fn() };
});

jest.mock('../../ui/pages/BlogPage/Editor/Editor', () => {
    return {
        ...jest.requireActual('../../ui/pages/BlogPage/Editor/Editor'),
        handleSubmit: jest.fn(),
        handleCancellation: jest.fn()
    };
});

test('show the edit button to registered users', async () => {
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

test('show the submit and cancel button and Editor-input-fields', async () => {
    const post = {
        "title":"Test title",
        "categoryslug":"Test categoryslug",
        "categorydisplayvalue":"Test categorydisplayvalue",
        "blogpostcontent":{
            "blocks": [{
                "key": "3g47c",
                "data": {},
                "text": "Test content",
                "type": "unstyled",
                "depth": 0,
                "entityRanges": [],
                "inlineStyleRanges": []}],
            "entityMap": {}
        }
    }
    fetchSinglePost.mockReturnValue(post)

    const mockedParams = {
        route: { params: { currentBid: 'whatever-id' } },
        match: { params: { slug: 'whatever-id' } },
        history: { block: jest.fn() },

    navigation: ''
    };

    render(<RichTextEditor {...mockedParams} />)

    //Submit-button and Cancel-button are there
    await waitFor(() => {
        expect(screen.getByTitle("submitButton")).toBeInTheDocument()
        expect(screen.getByTitle("cancelButton")).toBeInTheDocument()
    })

    //Title, Text and Category are there
    await waitFor(() => {
        expect(screen.getByTitle("titleInput")).toHaveValue(post.title)
        expect(screen.getByText(post.categorydisplayvalue)).toBeInTheDocument()
        expect(screen.getByText(post.blogpostcontent.blocks[0].text)).toBeInTheDocument()
    })
})
