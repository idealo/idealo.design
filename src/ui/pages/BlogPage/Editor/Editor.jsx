import React from "react";
import ReactModal from "react-modal";

import { withRouter } from "react-router";

import {
  convertFromRaw,
  convertToRaw,
  Editor,
  EditorState,
  getDefaultKeyBinding,
  RichUtils,
} from "draft-js";
import "~/draft-js/dist/Draft.css";
import s from "./Editor.module.scss";
import Prompt from "../Prompt";
import {
  fetchAllCategories,
  fetchSinglePost, insertSinglePost,
  updateSinglePost,
  fetchUserInfo
} from "../data";
import CreatableSelect from "react-select/creatable";
import slugify from "slugify";

export class RichTextEditor extends React.Component {
  constructor(props) {
    super(props);

    const { match } = props;
    this.blog = null;
    this.slug = match.params.slug;
    this.mode = this.slug ? "EDIT" : "CREATE";
    this.state = {
      editorState: EditorState.createEmpty(),
      title: "",
      categoryDisplayValue: "",
      categorySlug: "",
      isPromptOpen: false,
      isEdited: false,
      lastHistoryLocation: "",
      isSubmitPromptOpen: false,
      cats: [],
      error: [],
      existingTitle: [],
      author: "",
      titleInDatabase: ''
    };

    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => {
      this.setState({ editorState, isEdited: true });
      this.handleValidation();
    };

    this.handleKeyCommand = this._handleKeyCommand.bind(this);
    this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
    this.toggleBlockType = this._toggleBlockType.bind(this);
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
    this.handleCancellation = this.handleCancellation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onModalCancel = this.onModalCancel.bind(this);
    this.onModalLeave = this.onModalLeave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSelectCreate = this.handleSelectCreate.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
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

    this.setState({ cats: await fetchAllCategories(), author: await fetchUserInfo()});

    if (this.slug) {
      this.blog = await fetchSinglePost({ slug: this.slug });
      const contentState = convertFromRaw(this.blog.blogpostcontent);

      this.setState({
        blogpost: this.blog, // refactor
        title: this.blog.title,
        categorySlug: this.blog.categoryslug,
        categoryDisplayValue: this.blog.categorydisplayvalue,
        editorState: EditorState.createWithContent(contentState),
        titleInDatabase: this.blog.title,
      });
    }
    ReactModal.setAppElement("body");
  }

  renderContentAsRawJs() {
    const contentState = this.state.editorState.getCurrentContent();
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

  _mapKeyToEditorCommand(e) {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(
        e,
        this.state.editorState,
        4 /* maxDepth */
      );
      if (newEditorState !== this.state.editorState) {
        this.onChange(newEditorState);
      }
      return null;
    }

    return getDefaultKeyBinding(e);
  }

  _toggleBlockType(blockType) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  }

  handleCancellation(e) {
    if (this.state.isEdited) {
      this.setState({ isPromptOpen: true });
    } else {
      this.props.history.push("/blog");
    }
  }

  handleValidation() {
    const titles = [];
    fetch("/api/title")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        for (let date of data) {
          titles.push(date.title);
        }
        this.setState({ existingTitle: titles });
      });
    let formIsValid = true;
    let errors = {};
    const blacklist = ["new-post"];

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
        errors["title-value"] = 'Title can not be "new post"';
      }
    });

    this.state.existingTitle.map((word) => {
      if(word !== this.state.titleInDatabase){
        if (
            slugify(word)
                .replace(/^\s+|\s+$/g, "")
                .toLowerCase() ===
            slugify(this.state.title)
                .replace(/^\s+|\s+$/g, "")
                .toLowerCase()
        ) {
          formIsValid = false;
          errors["existing-title-value"] =
              "Title can not be that, because we already have a blogpost with that title";
        }
      }
    });

    if (!this.state.categoryDisplayValue) {
      formIsValid = false;
      errors["categoryDisplayValue"] = 1;
    }

    if (!this.state.editorState.getCurrentContent().getPlainText()) {
      formIsValid = false;
      errors["editorState"] = 1;
    }
    this.setState({ error: errors });

    return formIsValid;
  }

  showSubmitPrompt() {
    this.setState({ isSubmitPromptOpen: true });
    setTimeout(() => {
      this.setState({ isSubmitPromptOpen: false }, () => {
        this.props.history.push("/blog");
      });
    }, 1500);
  }

  async handleSubmit(e) {
    e.preventDefault();
    if (!this.handleValidation() && this.state.error["title-value"]) {
      alert("Title is invalid. Please choose a different title!");
      return;
    }

    if (!this.handleValidation() && this.state.error["existing-title-value"]) {
      alert("Title already exists. Please choose a different title!");
      return;
    }

    if (!this.handleValidation() && this.state.error["title-empty"]) {
      alert("Please choose a title!");
      return;
    }

    if (!this.handleValidation() && this.state.error["categoryDisplayValue"]) {
      alert("Please choose a category!");
      return;
    }

    if (!this.handleValidation() && this.state.error["editorState"]) {
      alert("Please write something!");
      return;
    }

    if (!this.handleValidation()) {
      alert("Form has errors. All fields must be completed.");
      return;
    }

    if (this.mode === "EDIT") {
      this.props.history.block(() => true);
      this.blog.title = this.state.title;
      this.blog.blogpostcontent = this.renderContentAsRawJs();
      this.blog.categorydisplayvalue = this.state.categoryDisplayValue;
      this.blog.categoryslug = this.state.categorySlug;
      this.blog.slug = slugify(this.state.title)
      await updateSinglePost(
          {
            slug: this.slug,
            post: this.blog,
          },
          () => {
            this.showSubmitPrompt();
          }
      );
      return;
    }

    const body = {
      title: this.state.title,
      categoryDisplayValue: this.state.categoryDisplayValue,
      categorySlug: this.state.categorySlug,
      autor: this.state.author.user.displayName,
      blogpostcontent: JSON.parse(this.renderContentAsRawJs()),
    };

    await insertSinglePost({post: body},
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
      this.props.history.push("/blog");
    });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if (target.type === "select-one") {
      const el = this.state.cats
        .filter((cat) => cat.categoryslug === value)
        .pop();
      this.setState({
        categoryDisplayValue: el.categorydisplayvalue,
      });
    }

    this.setState({
      [name]: value,
    });

    this.handleValidation();
  }

  async handleSelectChange(newValue, actionMeta) {
    await this.setState({
      categorySlug: newValue.categoryslug,
      categoryDisplayValue: newValue.categorydisplayvalue,
    });
    this.handleValidation();
  }

  handleSelectCreate(inputValue) {
    const { cats } = this.state;
    const newOption = {
      categoryslug: inputValue.toLowerCase().replace(/\W/g, ""),
      categorydisplayvalue: inputValue,
    };
    this.setState({
      cats: [...cats, newOption],
      categorySlug: newOption.categoryslug,
      categoryDisplayValue: newOption.categorydisplayvalue,
    });
  }

  render() {
    const { editorState } = this.state;
    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = s["RichEditor-editor"];
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== "unstyled") {
        className += " " + s["RichEditor-hidePlaceholder"];
      }
    }

    return (
      <>
        {this.mode === "EDIT" ? (
          <h1>Edit blogpost</h1>
        ) : (
          <h1 title="createHeading">Create blogpost</h1>
        )}

        <div className={s.InputFields}>
          <input
            className={
              this.state.error["title-empty"]
                ? s.empty
                : "" || this.state.error["title-value"]
                ? s.empty
                : "" || this.state.error["existing-title-value"]
                ? s.empty
                : ""
            }
            onChange={this.handleChange}
            name="title"
            title="titleInput"
            value={this.state.title}
            placeholder="Title"
          />
          <form
            name="category"
            className="select-container"
            title="categorySelect"
          >
            <CreatableSelect
              getOptionLabel={(option) => option.categorydisplayvalue}
              getOptionValue={(option) => option.categoryslug}
              onChange={this.handleSelectChange}
              onCreateOption={this.handleSelectCreate}
              options={this.state.cats}
              value={{
                categorydisplayvalue: this.state.categoryDisplayValue,
                categoryslug: this.state.categorySlug,
              }}
              getNewOptionData={(inputValue, optionLabel) => ({
                categoryslug: inputValue,
                categorydisplayvalue: optionLabel,
                __isNew__: true,
              })}
              className={
                this.state.error["categoryDisplayValue"] ? s.empty : ""
              }
            />
          </form>
        </div>

        <div
          className={
            this.state.error["editorState"]
              ? s.empty + " " + s["RichEditor-root"]
              : s["RichEditor-root"]
          }
        >
          <BlockStyleControls
            editorState={editorState}
            onToggle={this.toggleBlockType}
          />
          <InlineStyleControls
            editorState={editorState}
            onToggle={this.toggleInlineStyle}
          />
          <div onClick={this.focus} title="editorInputField">
            <Editor
              blockStyleFn={getBlockStyle}
              customStyleMap={styleMap}
              editorState={editorState}
              handleKeyCommand={this.handleKeyCommand}
              keyBindingFn={this.mapKeyToEditorCommand}
              onChange={this.onChange}
              placeholder="Tell a story..."
              ref="editor"
              spellCheck={true}
            />
          </div>
        </div>
        <div className={s["newBlogPostButtons"]}>
          <button
            title="submitButton"
            className={s["SubmitButton"]}
            onClick={this.handleSubmit}
          >
            Submit
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

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  if (block.getType()) {
    return "RichEditor-blockquote";
  } else {
    return null;
  }
}

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = s["RichEditor-styleButton"];
    if (this.props.active) {
      className += " " + s["RichEditor-activeButton"];
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}

const BLOCK_TYPES = [
  { label: "H1", style: "header-one" },
  { label: "H2", style: "header-two" },
  { label: "H3", style: "header-three" },
  { label: "H4", style: "header-four" },
  { label: "H5", style: "header-five" },
  { label: "H6", style: "header-six" },
  { label: "Blockquote", style: "blockquote" },
  { label: "UL", style: "unordered-list-item" },
  { label: "OL", style: "ordered-list-item" },
  { label: "Code Block", style: "code-block" },
];

const BlockStyleControls = (props) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

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

var INLINE_STYLES = [
  { label: "Bold", style: "BOLD" },
  { label: "Italic", style: "ITALIC" },
  { label: "Underline", style: "UNDERLINE" },
  { label: "Monospace", style: "CODE" },
];

const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <div className="RichEditor-controls">
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
  );
};

export default withRouter(RichTextEditor);
