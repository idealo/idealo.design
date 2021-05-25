import { fetchSinglePost, fetchUserInfo } from "../ui/pages/BlogPage/data";
import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { DetailView } from "../ui/pages/BlogPage/DetailView";
import React from "react";

jest.mock('../ui/pages/BlogPage/data', () => {
    return { fetchUserInfo: jest.fn(), fetchSinglePost: jest.fn() };
});

test('mockup blogpost gets rendered in detailView', async () => {
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

    const mockupBlogpost = {
        "id":1111,
        "title":"A mockup blogpost",
        "nextpost":"docker",
        "previouspost":"mein-erstes-mal-mit-react",
        "categorydisplayvalue":"Docker",
        "categoryslug":"docker",
        "slug":"Einstieg-in-die-Welt-der-Datenbanken",
        "date":"2021-01-20T13:46:44.351Z",
        "image":"https://s12.directupload.net/images/210212/bd5j6kn8.jpg",
        "autor":"Mock-up Author",
        "email":"mock-up-posts@gmail.com",
        "instagram":null,
        "twitter":null,
        "github":null,
        "facebook":null,
        "blogpostcontent":{
            "blocks":[{
                "key":"3aovx",
                "data":{},
                "text":"Just some simple mockup text!",
                "type":"unstyled",
                "depth":0,
                "entityRanges":[],
                "inlineStyleRanges":[]
            }],
            "entityMap":{}
        },
        "isarchived":0
    }

    fetchUserInfo.mockReturnValue(userInfo)
    fetchSinglePost.mockReturnValue(mockupBlogpost)

    const mockedParams = {
        match: { params: { slug: 'Einstieg-in-die-Welt-der-Datenbanken' } },
        navigation: ''
    };

    render(<DetailView {...mockedParams} />)

    await waitFor(() => {
        const blogpostTitleValue = screen.getByText("A mockup blogpost")
        expect(blogpostTitleValue).toBeInTheDocument()

        const blogpostAuthorValue = screen.getByText("Mock-up Author")
        expect(blogpostAuthorValue).toBeInTheDocument()

        const blogpostDate = screen.getByText("20.1.2021 um 16:46 Uhr")
        expect(blogpostDate).toBeInTheDocument()

        const blogpostContent = screen.getByText("Just some simple mockup text!")
        expect(blogpostContent).toBeInTheDocument()

        const blogpostImage = screen.getByRole('img', { name: 'blogpostImage'})
        expect(blogpostImage).toBeInTheDocument()
        expect(blogpostImage.src).toContain('https://s12.directupload.net/images/210212/bd5j6kn8.jpg')
    })
})