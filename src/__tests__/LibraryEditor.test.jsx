import "@testing-library/jest-dom/extend-expect";
import React from "react";
import {render, screen, waitFor} from "@testing-library/react";
import {RichTextEditor} from "../ui/pages/LibraryPage/Editor/Editor";
import {fetchSingleComponent} from "../ui/pages/LibraryPage/component_data";
import {fetchUserInfo} from "../ui/pages/BlogPage/data";

jest.mock("../ui/pages/LibraryPage/component_data", () => {
    return {
        fetchSingleComponent: jest.fn(),
    };
});

jest.mock("../ui/pages/BlogPage/data", () => {
    return {
        fetchUserInfo: jest.fn(),
    }
})

describe("Tests for the RichtTextEditorView in LibraryPage.", () => {
    const noUser = {
        status: "NOT_LOGGED_IN",
        user: {}
    };

    const user = {
        status: "LOGGED_IN",
        user: {
            displayName: "Testuser",
        }
    }

    const mockedParamsWithComponent = {
        match: { params: { slug: "component"} },
        history: { block: jest.fn() },
    };

    const mockedParamsWithoutComponent = {
        match: { params: { } },
        history: { block: jest.fn() },
    };

    const component_NOT_EMPTY = {
        title: "Test-Component",
        definition: "some definitions",
        usage: "some usage text",
        design: {
            blocks: [
                {
                    key: "3g47c",
                    data: {},
                    text: "some design text",
                    type: "unstyled",
                    depth: 0,
                    entityRanges: [],
                    inlineStyleRanges: [],
                },
            ],
            entityMap: {}
        },
        implementation: {
            anatomy: {
                blocks: [
                    {
                        key: "3g47c",
                        data: {},
                        text: "some anatomy text",
                        type: "unstyled",
                        depth: 0,
                        entityRanges: [],
                        inlineStyleRanges: [],
                    },
                ],
                entityMap: {}
            },
            guidelines: {
                blocks: [
                    {
                        key: "3g47c",
                        data: {},
                        text: "some guidelines text",
                        type: "unstyled",
                        depth: 0,
                        entityRanges: [],
                        inlineStyleRanges: [],
                    },
                ],
                entityMap: {}
            }
        }
    };

    test("User in not logged in", async () => {
        fetchUserInfo.mockReturnValue(noUser);
        render(<RichTextEditor />);

        const loadingMessage = screen.getByText("Loading...")
        expect(loadingMessage).toBeInTheDocument();

        await waitFor(() => {
            const loginMessage = screen.getByTitle("loginMessage")
            expect(loginMessage).toBeInTheDocument();
        })
    })

    test("User is logged in and is editing a component", async () => {
        fetchSingleComponent.mockReturnValue(component_NOT_EMPTY);
        fetchUserInfo.mockReturnValue(user);
        render(<RichTextEditor {...mockedParamsWithComponent}/>)

        await waitFor(() => {
            const placeholderTitle = screen.getByPlaceholderText(mockedParamsWithComponent.match.params.slug)
            const inputValueTitle = screen.getByDisplayValue(component_NOT_EMPTY.title)
            expect(placeholderTitle).toBeInTheDocument()
            expect(inputValueTitle).toBeInTheDocument()
            const textEditComponent = screen.getByText("Edit Component");
            expect(textEditComponent).toBeInTheDocument()
            const textCreateComponent = screen.queryByText('Create Component');
            expect(textCreateComponent).not.toBeInTheDocument()
            const definition = screen.getByText(component_NOT_EMPTY.definition)
            expect(definition).toBeInTheDocument();
            const usage = screen.getByText(component_NOT_EMPTY.usage)
            expect(usage).toBeInTheDocument();
            const anatomy = screen.getByText(component_NOT_EMPTY.implementation.anatomy.blocks[0].text)
            expect(anatomy).toBeInTheDocument()

            const buttons = screen.queryAllByRole('button')
            expect(buttons).toHaveLength(2)
            expect(buttons[0].title).toEqual('submitButton')
            expect(buttons[1].title).toEqual('cancelButton')
        })
    })

    test("User is logged in and is creating a new component", async () => {
        fetchUserInfo.mockReturnValue(user);
        render(<RichTextEditor {...mockedParamsWithoutComponent} />)

        await waitFor(() => {
            const textEditComponent = screen.queryByText("Edit Component");
            expect(textEditComponent).not.toBeInTheDocument()
            const textCreateComponent = screen.getByText('Create Component');
            expect(textCreateComponent).toBeInTheDocument();

            const placeholderDefinition = screen.getByPlaceholderText('Definition')
            expect(placeholderDefinition).toBeInTheDocument();
            const definitionText = screen.queryByText(component_NOT_EMPTY.definition)
            expect(definitionText).not.toBeInTheDocument();
            const usageText = screen.queryByText(component_NOT_EMPTY.usage)
            expect(usageText).not.toBeInTheDocument();
            const placeholderUsage = screen.getByPlaceholderText('Usage')
            expect(placeholderUsage).toBeInTheDocument();

            const anatomyText = screen.queryByText(component_NOT_EMPTY.implementation.anatomy.blocks[0].text)
            expect(anatomyText).not.toBeInTheDocument()
            const textTellAStory = screen.queryAllByText('Tell a story...')
            expect(textTellAStory).toHaveLength(2)

            const buttons = screen.queryAllByRole('button')
            expect(buttons).toHaveLength(2)
            expect(buttons[0].title).toEqual('submitButton')
            expect(buttons[1].title).toEqual('cancelButton')
        })
    })
})