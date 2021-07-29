import {fetchUserInfo} from "../ui/pages/BlogPage/data";
import { withRouter } from "react-router";
import {fetchComponents, fetchSingleComponent} from "../ui/pages/ComponentsPage/component_data";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import React from "react";
import {ComponentsDetailView} from "../ui/pages/ComponentsPage/ComponentsDetailView";
import {DetailView} from "../ui/pages/BlogPage/DetailView";

jest.mock('../ui/pages/BlogPage/data', () => {
    return {fetchUserInfo: jest.fn()};
});

jest.mock('../ui/pages/ComponentsPage/component_data', () => {
    return {fetchSingleComponent: jest.fn()};
});

test('ComponentDetailView gets rendered with user logged in',async () => {

    const mockupComponent = {
        "component_id": 1,
        "title": "@motif/button",
        "screenshots": [1,2,3],
        "tags": ["motif","button"],
        "usage": "import { Button } from '@motif/button';",
        "readme": {"order":["Motif UI `button`","Installation","Usage"],"content":{"Usage":{"body":"import { Button } from '@motif/button';","head":"## Usage"},"Installation":{"body":"```bash\nyarn add @motif/button\n```","head":"## Installation"},"Motif UI `button`":{"body":"","head":"# Motif UI `button`"}}}
    }

    const userInfo = {
        "status": "LOGGED_IN",
        "user": {
            "@odata.context": null,
            "businessPhones": [],
            "displayName": null,
            "givenName": null,
            "jobTitle": null,
            "mail": null,
            "mobilePhone": null,
            "officeLocation": null,
            "preferredLanguage": null,
            "surname": null,
            "userPrincipalName": null,
            "id": null
        }
    };

    const links = [
        "Design",
        "Installation",
        "Usage"
    ];

    fetchUserInfo.mockReturnValue(userInfo)
    fetchSingleComponent.mockReturnValue(mockupComponent)

    const mockedParams = {
        match: { params: { slug: "@motifbutton" } },
    };

    render(<ComponentsDetailView {...mockedParams} />)

    await waitFor(() => {
        const componentTitle = screen.getByTitle('componentDetailViewTitle')
        expect(componentTitle).toBeInTheDocument()

        for(const link of links){
            const nameOfTheLink =  screen.getByTitle(link)
            expect(nameOfTheLink).toBeInTheDocument()
        }
    })

    /*await waitFor(() =>{
        fireEvent.click(screen.getByTitle('Usage'));
        expect(screen.getByText("import { Button } from '@motif/button';"));

    })*/




})