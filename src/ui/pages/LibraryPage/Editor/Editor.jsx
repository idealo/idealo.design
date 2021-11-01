import React from "react";
import {withRouter} from "react-router";
import styles from "./Editor.module.scss"
import {convertFromRaw, convertToRaw, Editor, EditorState, getDefaultKeyBinding, RichUtils} from "draft-js";
import "~/draft-js/dist/Draft.css";
import {
    BlockStyleControls,
    getBlockStyle, InlineStyleControls,
    styleMap
} from "../../../components/DraftJsEditor/DraftJsEditorData";
import {fetchSingleComponent, fetchTags, insertSingleComponent, updateSingleComponent} from "../component_data";
import slugify from "slugify";
import Prompt from "../../../components/Prompt";
import s from "../../BlogPage/Editor/Editor.module.scss";
import {fetchUserInfo} from "../../BlogPage/data";
import LoginMessage from "../../../components/LoginMessage";
import Select from "react-select";

export class RichTextEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            error: null,
        }
    }

    async componentDidMount() {
        const user = await fetchUserInfo()
        if(user.status === "LOGGED_IN"){
            this.setState({
                user: user,
            });
        }else{
            this.setState({
                error: '401',
            })
        }
    }

    render() {
        if(this.state.user){
            return <EditorView {...this.props}/>
        }else if(this.state.error){
            return <LoginMessage children="Library"/>
        }else{
            return <h2>Loading...</h2>
        }
    }
}

class EditorView extends React.Component {
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
            error: [],
            existingTitles: [],
            titleInDatabase: "",
            tags: [],
            allTags: [],
        }

        this.guidelinesFocus = () => {
            this.refs.guidelines.focus();
        }
        this.anatomyFocus = () => this.refs.anatomy.focus();
        this.onChangeGuide = (editorState) => {
            this.setState({ guidelines: editorState, isEdited: true });
            this.handleValidation();
        };

        this.onChangeAna = (editorState) => {
            this.setState({ anatomy: editorState, isEdited: true });
            this.handleValidation();
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
        this.showSubmitPrompt = this.showSubmitPrompt.bind(this);
    }

    async componentDidMount() {
        this.props.history.block((tx) => {
            if (this.state.isEdited) {
                this.setState({ lastHistoryLocation: tx.pathname, isPromptOpen: true });
                return !this.state.isEdited;
            }
            return true;
        });
        if(this.slug){
            this.component= await fetchSingleComponent({slug: this.slug})

            if(this.component.implementation.guidelines){
                const contentStateGuide = convertFromRaw(this.component.implementation.guidelines)
                this.setState({guidelines: EditorState.createWithContent(contentStateGuide)})
            }
            if(this.component.implementation.anatomy){
                const contentStateAna = convertFromRaw(this.component.implementation.anatomy)
                this.setState({anatomy: EditorState.createWithContent(contentStateAna)})
            }

            const tagValues = []
            for(let tag of this.component.tags){
                tagValues.push({
                    label: tag,
                    value: tag,
                })
            }

            this.setState({
                title: this.component.title,
                definition: this.component.definition,
                usage: this.component.usage,
                titleInDatabase: this.component.title,
                tags: tagValues,
            })

        }

        const options = [];
        const tags = await fetchTags()
        for (let tag of tags) {
            options.push({
                label: tag.tag_name,
                value: tag.tag_name,
            });
        }
        this.setState({
            allTags: options
        })

    }

    renderContentAsRawJs(content) {
        const contentState = content.getCurrentContent();
        const raw = convertToRaw(contentState);
        return JSON.stringify(raw, null, 2);
    }

    _handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChangeGuide(newState);
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
                this.onChangeGuide(newEditorState);
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
                this.onChangeAna(newEditorState);
            }
            return null;
        }

        return getDefaultKeyBinding(e);
    }

    _toggleBlockTypeGuide(blockType) {
        this.onChangeGuide(RichUtils.toggleBlockType(this.state.guidelines, blockType));
    }

    _toggleBlockTypeAna(blockType) {
        this.onChangeAna(RichUtils.toggleBlockType(this.state.anatomy, blockType));
    }

    _toggleInlineStyleGuide(inlineStyle) {
        this.onChangeGuide(
            RichUtils.toggleInlineStyle(this.state.guidelines, inlineStyle)
        );
    }
    _toggleInlineStyleAna(inlineStyle) {
        this.onChangeAna(
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

    handleValidation(){
        const titles = []
        const errors = {}
        const blacklist = ['new-component']
        let formIsValid = true;
        fetch("/api/components").then((response) => {
            return response.json()
        }).then((components) => {
            for(const component of components){
                titles.push(component.title)
            }
            this.setState({existingTitles: titles})
        })

        if (!this.state.title) {
            formIsValid = false;
            errors["title-empty"] = 1;
        }

        blacklist.map((word) => {
            if (
                word ===
                slugify(this.state.title)
                    .replace(/^\s+|\s+$/g, "")
                    .toLowerCase()
            ) {
                formIsValid = false;
                errors["title-value"] = 'Title can not be "new component"';
            }
        });

        this.state.existingTitles.map((title) => {
            if(title !== this.state.titleInDatabase){
                if(
                    slugify(title)
                        .replace(/^\s+|\s+$/g, "")
                        .toLowerCase() ===
                    slugify(this.state.title)
                        .replace(/^\s+|\s+$/g, "")
                        .toLowerCase()
                ) {
                    formIsValid = false;
                    errors["existing-title-value"] =
                        "Title can not be that, because we already have a component with that title";
                }
            }
        })

        if(!this.state.definition){
            formIsValid = false;
            errors["definition-empty"] = 1;
        }
        this.setState({ error: errors });

        return formIsValid;
    }

    showSubmitPrompt() {
        this.setState({ isSubmitPromptOpen: true });
        setTimeout(() => {
            this.setState({ isSubmitPromptOpen: false }, () => {
                this.props.history.push("/library");
            });
        }, 1500);
    }

    async handleSubmit(e){
        e.preventDefault();
        if (!this.handleValidation() && this.state.error["title-value"]) {
            alert("Title is invalid. Please choose a different title!");
            return;
        }

        if(!this.handleValidation() && this.state.error["definition-empty"]){
            alert("Please write content in definition field.")
        }

        if (!this.handleValidation() && this.state.error["existing-title-value"]) {
            alert("Title already exists. Please choose a different title!");
            return;
        }

        if (!this.handleValidation() && this.state.error["title-empty"]) {
            alert("Please choose a title!");
            return;
        }

        if (!this.handleValidation()) {
            alert("Form has errors. All fields must be completed.");
            return;
        }
        if(this.mode === "EDIT"){
            this.props.history.block(()=> true);
            this.component.title = this.state.title;
            this.component.implementation.guidelines = JSON.parse(this.renderContentAsRawJs(this.state.guidelines));
            this.component.implementation.anatomy = JSON.parse(this.renderContentAsRawJs(this.state.anatomy));
            this.component.definition = this.state.definition;
            this.component.usage = this.state.usage;
            this.component.slug = slugify(this.state.title);
            this.component.tags = this.state.tags

            await updateSingleComponent({component: this.component},
                () => {this.showSubmitPrompt()})
            return;
        }
        const implementation = {}
        implementation.anatomy = JSON.parse(this.renderContentAsRawJs(this.state.anatomy))
        implementation.guidelines = JSON.parse(this.renderContentAsRawJs(this.state.guidelines))

        const tags = []
        for(let tag of this.state.tags){
            tags.push(tag.label)
        }
        const body = {
            title: this.state.title,
            definition: this.state.definition,
            implementation: implementation,
            design: this.state.design,
            usage: this.state.usage,
            tags: tags,
        }

        await insertSingleComponent({component: body},
            () => {
                this.showSubmitPrompt();
            })

        this.props.history.block(() => {
            return true;
        });
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
        if(e.constructor.name !== 'Array'){
            const content = e.target.name
            const value = e.target.value;
            this.setState({
                [content]: value,
            });
            this.handleValidation()
        }else {
            this.setState({
                tags: e
            })
        }
    }

    getDraftJsContent(currentContent){
        const contentState = currentContent.getCurrentContent();
        let className = styles["RichEditor-editor"];
        if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== "unstyled") {
                className += " " + styles["RichEditor-hidePlaceholder"];
            }
        }
    }

    render() {
        const {guidelines} = this.state
        const {anatomy} = this.state
        this.getDraftJsContent(anatomy)
        this.getDraftJsContent(guidelines)

        return (
            <>
                {this.mode === "EDIT" ?
                    <h1>Edit Component</h1>
                    :
                    <h1>Create Component</h1>}
                <div className={styles.InputFields}>
                    Title:
                    <br/>
                    <input
                        name="title"
                        className={
                            this.state.error["title-empty"] || this.state.error["title-value"] || this.state.error["existing-title-value"]
                                ? s.empty
                                : ""
                        }
                        value={this.state.title}
                        onChange={this.handleChange}
                        placeholder="component"/>
                    <br/>
                    Tags:
                    <Select
                        isMulti
                        className = "basic-multi-select"
                        onChange = {(selectedTags) => {this.handleChange(selectedTags)}}
                        options = {this.state.allTags}
                        value = {this.state.tags}
                    />
                    Definition:
                    <textarea
                        className={this.state.error["definition-empty"] ? s.empty : ""}
                        name="definition"
                        rows="5"
                        onChange={this.handleChange}
                        value={this.state.definition || ''}
                        placeholder="Definition"
                    />
                    <br/>
                    Usage:
                    <textarea
                        name="usage"
                        rows="5"
                        onChange={this.handleChange}
                        value={this.state.usage || ''}
                        placeholder="Usage"
                    />
                    Anatomy:
                    <div
                        className={styles["RichEditor-root"]}
                    >
                        <BlockStyleControls
                            anatomy={anatomy}
                            onToggle={this.toggleBlockTypeAna}
                        />
                        <InlineStyleControls
                            anatomy={anatomy}
                            onToggle={this.toggleInlineStyleAna}
                        />
                        <div onClick={this.anatomyFocus} title="anatomyInputField">
                            <Editor
                                blockStyleFn={getBlockStyle}
                                customStyleMap={styleMap}
                                editorState={anatomy}
                                handleKeyCommand={this.handleKeyCommand}
                                keyBindingFn={this.mapKeyToEditorCommandAna}
                                onChange={this.onChangeAna}
                                placeholder="Tell a story..."
                                ref="anatomy"
                                spellCheck={true}
                            />
                        </div>
                    </div>
                    Guidelines:
                    <div
                        className={styles["RichEditor-root"]}
                    >
                        <BlockStyleControls
                            guidelines={guidelines}
                            onToggle={this.toggleBlockTypeGuide}
                        />
                        <InlineStyleControls
                            guidelines={guidelines}
                            onToggle={this.toggleInlineStyleGuide}
                        />
                        <div onClick={this.guidelinesFocus} title="guidelinesInputField">
                            <Editor
                                blockStyleFn={getBlockStyle}
                                customStyleMap={styleMap}
                                editorState={guidelines}
                                handleKeyCommand={this.handleKeyCommand}
                                keyBindingFn={this.mapKeyToEditorCommandGuide}
                                onChange={this.onChangeGuide}
                                placeholder="Tell a story..."
                                ref="guidelines"
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
                        className={styles["CancelButton"]}
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
                    message="Your component has been saved successfully."
                    type = "prompt_of_saving_dataset"
                />
            </>

        );
    }
}

export default withRouter(RichTextEditor)