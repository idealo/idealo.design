import '@testing-library/jest-dom/extend-expect';
import React from "react";
import {render, screen} from "@testing-library/react";
import { RichTextEditor } from "../ui/pages/BlogPage/Editor/Editor";

test('editor is rendered correctly when the mode is create', () => {

    const mockedParams = {
        match: { params: { slug: '' } }
    };

    render(<RichTextEditor {...mockedParams} />)

    const submitButton = screen.getByRole('button', { name: 'Submit'})
    expect(submitButton).toBeInTheDocument()

    const cancelButton = screen.getByRole('button', { name: 'Cancel'})
    expect(cancelButton).toBeInTheDocument()

    const editorHeading = screen.getByTitle("createHeading")
    expect(editorHeading).toBeInTheDocument()

    const titleInput = screen.getByTitle("titleInput")
    expect(titleInput).toBeInTheDocument()

    const categorySelect = screen.getByTitle("categorySelect")
    expect(categorySelect).toBeInTheDocument()

    const editorInputField = screen.getByTitle("editorInputField")
    expect(editorInputField).toBeInTheDocument()
})