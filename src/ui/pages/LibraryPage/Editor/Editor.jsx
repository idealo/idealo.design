import React from "react";
import {withRouter} from "react-router";
import styles from "./Editor.module.scss"
import {convertFromRaw, convertToRaw, Editor, EditorState, getDefaultKeyBinding, RichUtils} from "draft-js";
import "~/draft-js/dist/Draft.css";
import {
    BLOCK_TYPES,
    getBlockStyle, INLINE_STYLES, StyleButton,
    styleMap
} from "../../BlogPage/Editor/Editor";
import {fetchSingleComponent} from "../component_data";
import slugify from "slugify";
import s from "../../BlogPage/Editor/Editor.module.scss";
import Prompt from "../../BlogPage/Prompt";

export class RichTextEditor extends React.Component {
    constructor(props) {
        super(props);
        const {match} = props;
        this.slug = match.params.slug;
        this.component = null;
        this.mode = this.slug ? "EDIT" : "CREATE";
        this.state = {
            title: "",
            definition: "",
            design: "",
            guidelines: EditorState.createEmpty(),
            usage: "",
            anatomy: EditorState.createEmpty(),
            isEdited: false,
            isPromptOpen: false,
            lastHistoryLocation: "",
            isSubmitPromptOpen: false,
        }

        this.focus = () => this.refs.editor.focus();
        this.onChange = (editorStateGuide, editorStateAna) => {
            this.setState({ guidelines: editorStateGuide, anatomy: editorStateAna, isEdited: true });
            //this.handleValidation();
        };

        this.handleKeyCommand = this._handleKeyCommand.bind(this);
        this.mapKeyToEditorCommandGuide = this._mapKeyToEditorCommandGuide.bind(this);
        this.mapKeyToEditorCommandAna = this._mapKeyToEditorCommandAna.bind(this);
        this.toggleBlockTypeGuide = this._toggleBlockTypeGuide.bind(this);
        this.toggleBlockTypeAna = this._toggleBlockTypeAna.bind(this);
        this.toggleInlineStyleGuide = this._toggleInlineStyleGuide.bind(this);
        this.toggleInlineStyleAna = this._toggleInlineStyleAna.bind(this);
        this.handleCancellation = this.handleCancellation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onModalCancel = this.onModalCancel.bind(this);
        this.onModalLeave = this.onModalLeave.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeImplementation = this.handleChangeImplementation.bind(this);
        this.showSubmitPrompt = this.showSubmitPrompt.bind(this);
    }

    async componentDidMount() {

        this.props.history.block((tx) => {
            if (this.state.isEdited) {
                //this.setState({ lastHistoryLocation: tx.pathname, isPromptOpen: true });
                return !this.state.isEdited;
            }
            return true;
        });
        if(this.slug){
            this.component= await fetchSingleComponent({slug: this.slug})
            if(this.component.implementation){
                if(this.component.implementation.guidelines){
                    const contentStateGuide = convertFromRaw(this.component.implementation.guidelines)
                    this.setState({guidelines: EditorState.createWithContent(contentStateGuide)})
                }
                if(this.component.implementation.anatomy){
                    const contentStateAna = convertFromRaw(this.component.implementation.anatomy)
                    this.setState({anatomy: EditorState.createWithContent(contentStateAna)})
                }
            }
        //console.log(this.component)
        this.setState({
            title: this.component.title,
            definition: this.component.definition,
            usage: this.component.implementation.usage
        })
            console.log(this.state)
        }
    }

    renderContentAsRawJs(content) {
        const contentState = content.getCurrentContent();
        const raw = convertToRaw(contentState);
        return JSON.stringify(raw, null, 2);
    }

    _handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    }

    _mapKeyToEditorCommandGuide(e) {
        if (e.keyCode === 9 /* TAB */) {
            const newEditorState = RichUtils.onTab(
                e,
                this.state.guidelines,
                4 /* maxDepth */
            );
            if (newEditorState !== this.state.guidelines) {
                this.onChange(newEditorState);
            }
            return null;
        }

        return getDefaultKeyBinding(e);
    }

    _mapKeyToEditorCommandAna(e) {
        if (e.keyCode === 9 /* TAB */) {
            const newEditorState = RichUtils.onTab(
                e,
                this.state.anatomy,
                4 /* maxDepth */
            );
            if (newEditorState !== this.state.anatomy) {
                this.onChange(newEditorState);
            }
            return null;
        }

        return getDefaultKeyBinding(e);
    }

    _toggleBlockTypeGuide(blockType) {
        this.onChange(RichUtils.toggleBlockType(this.state.guidelines, blockType));
    }

    _toggleBlockTypeAna(blockType) {
        this.onChange(RichUtils.toggleBlockType(this.state.anatomy, blockType));
    }

    _toggleInlineStyleGuide(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(this.state.guidelines, inlineStyle)
        );
    }
    _toggleInlineStyleAna(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(this.state.anatomy, inlineStyle)
        );
    }

    handleCancellation(e) {
        if (this.state.isEdited) {
            this.setState({ isPromptOpen: true });
        } else {
            this.props.history.push("/library");
        }
    }

    showSubmitPrompt() {
        this.setState({ isSubmitPromptOpen: true });
        setTimeout(() => {
            this.setState({ isSubmitPromptOpen: false }, () => {
                this.props.history.push("/blog");
            });
        }, 1500);
    }

    handleSubmit(e){
        if(this.mode === "EDIT"){
            this.props.history.block(()=> true);
            this.component.title = this.state.title;
            this.component.implementation.guidelines = this.renderContentAsRawJs(this.state.guidelines);
            this.component.implementation.anatomy = this.renderContentAsRawJs(this.state.anatomy);
            this.component.definition = this.state.definition;
            this.component.implementation.usage = this.state.usage;
            this.component.slug = slugify(this.state.title);
        }
        const implementation = {}
        implementation.anatomy = JSON.parse(this.renderContentAsRawJs(this.state.anatomy))
        implementation.guidelines = JSON.parse(this.renderContentAsRawJs(this.state.guidelines))
        const body = {
            title: this.state.component.title,
            slug: slugify(this.state.component.title),
            definition: this.state.component.definition,
            implementation: implementation,
            design: this.state.component.design,
        }
        console.log(body)
    }

    onModalCancel() {
        this.setState({ isPromptOpen: false });
    }

    onModalLeave() {
        this.setState({ isPromptOpen: false, isEdited: false }, () => {
            this.props.history.push("/library");
        });
    }

    handleChange(e){
        const content = e.target.name
        const value = e.target.value;
        this.setState({
            [content]: value,
        });
    }

    handleChangeImplementation(e){
        const content = e.target.name
        const value=e.target.value
        this.setState({[content]: value})
    }

    render() {
        const {guidelines} = this.state
        const {anatomy} = this.state
        let className = s["RichEditor-editor"];
        let contentStateAna = ""
        if(anatomy){
            contentStateAna = anatomy.getCurrentContent();
            if (!contentStateAna.hasText()) {
                if (contentStateAna.getBlockMap().first().getType() !== "unstyled") {
                    className += " " + s["RichEditor-hidePlaceholder"];
                }
            }
        }
        const contentStateGuide = guidelines.getCurrentContent();
        if (!contentStateGuide.hasText()) {
            if (contentStateGuide.getBlockMap().first().getType() !== "unstyled") {
                className += " " + s["RichEditor-hidePlaceholder"];
            }
        }

        return (
            <>
                {this.mode === "EDIT" ?
                    <h1>Edit Blogpost</h1>
                    :
                    <h1>Create Blogpost</h1>}
                <div>
                    <input
                        name="title"
                        value={this.state.title}
                        className={styles.empty}
                        onChange={this.handleChange}
                        placeholder="component"/>
                    <textarea
                        name="definition"
                        rows="5"
                        onChange={this.handleChange}
                        value={this.state.definition}
                        placeholder="Definition"
                    />
                    <textarea
                        name="usage"
                        rows="5"
                        onChange={this.handleChangeImplementation}
                        value={this.state.usage}
                        placeholder="Usage"
                    />
                    Anatomy:
                    <div
                        /*className={
                            this.state.error["editorState"]
                                ? s.empty + " " + s["RichEditor-root"]
                                : s["RichEditor-root"]
                        }*/
                    >
                        <BlockStyleControlsAna
                            editorState={anatomy}
                            onToggle={this.toggleBlockTypeAna}
                        />
                        <InlineStyleControlsAna
                            editorState={anatomy}
                            onToggle={this.toggleInlineStyleAna}
                        />
                        <div onClick={this.focus} title="anatomyInputField">
                            <Editor
                                blockStyleFn={getBlockStyle}
                                customStyleMap={styleMap}
                                editorState={anatomy}
                                handleKeyCommand={this.handleKeyCommand}
                                keyBindingFn={this.mapKeyToEditorCommandAna}
                                onChange={this.onChange}
                                placeholder="Tell a story..."
                                ref="editor"
                                spellCheck={true}
                            />
                        </div>
                    </div>
                    Guidelines:
                    <div
                        /*className={
                            this.state.error["editorState"]
                                ? s.empty + " " + s["RichEditor-root"]
                                : s["RichEditor-root"]
                        }*/
                    >
                        <BlockStyleControlsGuide
                            editorState={guidelines}
                            onToggle={this.toggleBlockTypeGuide}
                        />
                        <InlineStyleControlsGuide
                            editorState={guidelines}
                            onToggle={this.toggleInlineStyleGuide}
                        />
                        <div onClick={this.focus} title="guidelinesInputField">
                            <Editor
                                blockStyleFn={getBlockStyle}
                                customStyleMap={styleMap}
                                editorState={guidelines}
                                handleKeyCommand={this.handleKeyCommand}
                                keyBindingFn={this.mapKeyToEditorCommandGuide}
                                onChange={this.onChange}
                                placeholder="Tell a story..."
                                ref="editor"
                                spellCheck={true}
                            />
                        </div>
                    </div>
                    <button
                        title="submitButton"
                        className={styles.SubmitButton}
                        onClick={this.handleSubmit}
                    >Submit
                    </button>
                    <button
                        title="cancelButton"
                        className={s["CancelButton"]}
                        onClick={this.handleCancellation}
                    >
                        Cancel
                    </button>
                </div>
                <Prompt
                    show={this.state.isPromptOpen}
                    onHide={this.onModalCancel}
                    onLeave={this.onModalLeave}
                    message="Are you sure you want to leave without saving your changes?"
                />
                <Prompt
                    show={this.state.isSubmitPromptOpen}
                    onLeave={this.onModalLeave}
                    message="Your blogpost has been saved successfully."
                />
            </>

        );
    }
}

const InlineStyleControlsGuide = (props) => {
    let currentStyle = ""
    if(props.guidelines){
        currentStyle = props.guidelines.getCurrentInlineStyle();
    }

    return (
        <div className="RichEditor-controls">
            {currentStyle ? (
                <div>
                    {INLINE_STYLES.map((type) => (
                        <StyleButton
                            key={type.label}
                            active={currentStyle.has(type.style)}
                            label={type.label}
                            onToggle={props.onToggle}
                            style={type.style}
                        />
                    ))}
                </div>

            ):(<div/>)}
        </div>
    );
};

const InlineStyleControlsAna = (props) => {
    let currentStyle = ""
    if(props.anatomy){
        currentStyle = props.anatomy.getCurrentInlineStyle();
    }

    return (
        <div className="RichEditor-controls">
            {currentStyle ? (
                <div>
                    {INLINE_STYLES.map((type) => (
                        <StyleButton
                            key={type.label}
                            active={currentStyle.has(type.style)}
                            label={type.label}
                            onToggle={props.onToggle}
                            style={type.style}
                        />
                    ))}
                </div>

            ):(<div/>)}

        </div>
    );
};

const BlockStyleControlsGuide = (props) => {
    const { guidelines } = props;
    let selection = ""
    let blockType = ""
    if(guidelines){
        selection = guidelines.getSelection();
        blockType = guidelines
            .getCurrentContent()
            .getBlockForKey(selection.getStartKey())
            .getType();
    }


    return (
        <div className={s["RichEditor-controls"]}>
            {BLOCK_TYPES.map((type) => (
                <StyleButton
                    key={type.label}
                    active={type.style === blockType}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                />
            ))}
        </div>
    );
};

const BlockStyleControlsAna = (props) => {
    const { anatomy } = props;
    let selection = ""
    let blockType = ""
    if(anatomy){
        selection = anatomy.getSelection();
        blockType = anatomy
            .getCurrentContent()
            .getBlockForKey(selection.getStartKey())
            .getType();
    }


    return (
        <div className={s["RichEditor-controls"]}>
            {BLOCK_TYPES.map((type) => (
                <StyleButton
                    key={type.label}
                    active={type.style === blockType}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                />
            ))}
        </div>
    );
};

export default withRouter(RichTextEditor)