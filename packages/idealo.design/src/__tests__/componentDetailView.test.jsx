import {fetchUserInfo} from "../ui/pages/BlogPage/data";
import {fetchSingleComponent} from "../ui/pages/ComponentsPage/component_data";
import {render, screen, waitFor} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import React from "react";
import {ComponentsDetailView} from "../ui/pages/ComponentsPage/ComponentsDetailView";

jest.mock('../ui/pages/BlogPage/data', () => {
    return {fetchUserInfo: jest.fn()};
});

jest.mock('../ui/pages/ComponentsPage/component_data', () => {
    return {fetchSingleComponent: jest.fn()};
});

describe('test detailview', ()=>{
    const mockupComponent = {
        "component_id": 1,
        "title": "@motif/button",
        "screenshots": [1,2,3],
        "tags": ["motif","button"],
        "readme": {"order":["Motif UI `button`","Installation","Usage"],"content":{"Usage":{"body":"import { Button } from '@motif/button';","head":"## Usage"},"Installation":{"body":"yarn add @motif/button","head":"## Installation"},"Motif UI `button`":{"body":"","head":"# Motif UI `button`"}}}
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

    const mockedParams = {
        match: { params: { slug: "@motifbutton" } },
    };

    test('ComponentDetailView gets rendered with user logged in',async () => {

        fetchUserInfo.mockReturnValue(userInfo)
        fetchSingleComponent.mockReturnValue(mockupComponent)

        render(<ComponentsDetailView {...mockedParams} />)

        await waitFor(() => {
            const componentTitle = screen.getByTitle(mockupComponent.title)
            expect(componentTitle).toBeInTheDocument()

            for(const link of links){
                expect(screen.getByTitle(link).closest('a')).toHaveAttribute('href', '#'+link )
            }

            const buttonToBitbucket = screen.getByTitle('buttonToBitbucket')
            expect(buttonToBitbucket).toBeInTheDocument()
            expect(screen.getByTitle('linkToBitbucket').closest('a')).toHaveAttribute('href', 'https://code.eu.idealo.com/projects/SFECO/repos/motif-ui/browse/src/button/src/' )
        })
    })

    test('ComponentDetailView for Usage gets rendered with user logged in', async ()=> {
        Object.defineProperty(window, 'location', {
            get() {
                return { href: '#Usage' };
            },
        });
        render(<ComponentsDetailView {...mockedParams} />);

        await waitFor(()=>{
            expect(screen.getByText(mockupComponent.readme.content.Usage.body))
            expect(screen.getByTitle('copyUsage')).toBeInTheDocument()
        })
    });

    test('ComponentDetailView for Installation gets rendered with user logged in', async ()=> {
        Object.defineProperty(window, 'location', {
            get() {
                return { href: '#Installation' };
            },
        });
        render(<ComponentsDetailView {...mockedParams} />);

        await waitFor(()=>{
            expect(screen.getByText(mockupComponent.readme.content.Installation.body))
            expect(screen.getByTitle('copyInstallation')).toBeInTheDocument()
        })
    });

    test('ComponentDetailView for Design gets rendered with user logged in', async ()=> {
        Object.defineProperty(window, 'location', {
            get() {
                return { href: '#Design' };
            },
        });
        render(<ComponentsDetailView {...mockedParams} />);

        await waitFor(()=>{
            for(const screenshot of mockupComponent.screenshots){
                expect(screen.getByTitle(screenshot).closest('img')).toHaveAttribute('src', 'http://localhost:8080/api/screenshots/'+screenshot )
            }
        })
    });
})