import React from 'react';
import { create } from "react-test-renderer"
import { RichTextEditor } from '../ui/pages/BlogPage/Editor/Editor'
import EditorView from "../ui/pages/BlogPage/EditorView";


// EditorView can't be accessed by an unauthenticated user
it('logged out user can not access editor', () => {
    const editorTest = create(<EditorView />);
    expect(editorTest.toJSON()).toMatchSnapshot();
});

// RichTextEditor gets rendered correctly and the editor is empty
it('logged out user can not access editor', done => {
    try{
        const RichTextEditorProps = {
            match: {
                params: ''
            }
        };
        const editorTest = create(<RichTextEditor {...RichTextEditorProps} />);
        editorTest.getInstance();
        expect(editorTest.toJSON()).toMatchSnapshot();
        done();
    }catch (error){
        done(error)
    }
});

