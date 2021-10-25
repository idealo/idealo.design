import React from "react";
import {withRouter} from "react-router";
import styles from "./Editor.module.scss"
import {convertToRaw, Editor, EditorState, RichUtils} from "draft-js";
import "~/draft-js/dist/Draft.css";
import {BlockStyleControls, InlineStyleControls} from "../../BlogPage/Editor/Editor";

export class RichTextEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guidelines: null,
            title: null,
            definition: null,
            usage: null,
            anatomy: null,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    renderContentAsRawJs(content) {
        const contentState = content.getCurrentContent();
        const raw = convertToRaw(contentState);
        return JSON.stringify(raw, null, 2);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        console.log(this.state)
    }

    handleAnatomyEditor = (editorState) => {
        const anatomy = JSON.parse(this.renderContentAsRawJs(editorState))
        this.setState({anatomy})
    }

    handleGuidelinesEditor = (editorState) => {
        const guidelines = JSON.parse(this.renderContentAsRawJs(editorState))
        this.setState({guidelines})
    }

    render() {
        return (
            <div>
                <h1>create new Component</h1>
                <input
                    name="title"
                    className={styles.empty}
                    onChange={this.handleChange}
                    placeholder="component"/>
                <textarea
                    name="definition"
                    rows="5"
                    onChange={this.handleChange}
                    placeholder="Definition"
                />
                <textarea
                    name="usage"
                    rows="5"
                    onChange={this.handleChange}
                    placeholder="Usage"
                />
                <textarea
                    name="guidelines"
                    rows="5"
                    onChange={this.handleChange}
                    placeholder="Guidelines"
                />
                Anatomy:
                <RichEditor editorState= {this.handleAnatomyEditor}/>
                Guidelines:
                <RichEditor editorState = {this.handleGuidelinesEditor}/>
                <button
                    title="submitButton"
                    className={styles.SubmitButton}
                    onClick={this.handleSubmit}
                >Submit
                </button>
            </div>
        );
    }
}

export default withRouter(RichTextEditor)

class RichEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        }
        this.toggleBlockType = this._toggleBlockType.bind(this);
        this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
        this.onChange = this.onChange.bind(this)
    }

    onChange(editorState){
        this.setState({editorState})
        this.props.editorState(editorState)
    }

    _toggleBlockType(blockType) {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
    }

    _toggleInlineStyle(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
        );
    }

    render() {
        const { editorState } = this.state;
        return (
            <div className={styles.RichEditor}>
                <BlockStyleControls
                    editorState={editorState}
                    onToggle={this.toggleBlockType}
                />
                <InlineStyleControls
                    editorState={editorState}
                    onToggle={this.toggleInlineStyle}

                />
                <div>
                    <Editor
                        onChange={this.onChange}
                        editorState={this.state.editorState}
                    />
                </div>
            </div>
        )
    }
}