import React from 'react'

import { withRouter } from 'react-router'

import { Editor, EditorState, getDefaultKeyBinding, RichUtils, ContentState } from "draft-js";
import '~/draft-js/dist/Draft.css'
import s from './Editor.module.scss';
import Prompt from './Prompt';
import PromptSuccess from "./PromptSuccess";
import { fetchSinglePost, updateSinglePost } from '../data';

class RichTextEditor extends React.Component {
  constructor(props) {
    super(props);

    const { match, location, history } = props;

    this.blog = null;
    this.slug = match.params.slug;
    this.mode = this.slug ? 'EDIT' : 'CREATE';
    this.state = {
      editorState: EditorState.createEmpty(),
      title: '',
      categoryDisplayValue: '',
      categorySlug: '',
      isPromptOpen: false,
      isEdited: false,
      lastHistoryLocation: '',
      isSubmitPromptOpen: false
    };

    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => {
      this.setState({ editorState, isEdited: true });
    }

    this.handleKeyCommand = this._handleKeyCommand.bind(this);
    this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
    this.toggleBlockType = this._toggleBlockType.bind(this);
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
    this.handleCancelation = this.handleCancelation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onModalCancel = this.onModalCancel.bind(this);
    this.onModalLeave = this.onModalLeave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    this.props.history.block((tx) => {
      if (this.state.isEdited) {
        this.setState({ lastHistoryLocation: tx.pathname, isPromptOpen: true });
        return !this.state.isEdited;
      }
      return true;
    })

    if(this.slug) {
      this.blog = await fetchSinglePost({ slug: this.slug });
      console.log('this....blog', this.blog);
      
      this.setState({
        blogpost: this.blog, // refactor
        title: this.blog.title,
        categorySlug: this.blog.categorySlug,
        categoryDisplayValue: this.blog.categoryDisplayValue,
        editorState: EditorState.createWithContent(ContentState.createFromText(this.blog.text))
      })
    }
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
        4, /* maxDepth */
      );
      if (newEditorState !== this.state.editorState) {
        this.onChange(newEditorState);
      }
      return null;
    }

    return getDefaultKeyBinding(e);
  }

  _toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }

  handleCancelation(e) {
    console.log("handelCancelation", this.props);
    
    if(this.state.isEdited) {
      this.setState({isPromptOpen: true }); 
    } else {
      this.props.history.push('/blog');
    }
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.mode === 'EDIT') {
      this.props.history.block(() => true);
      this.blog.text = this.state.editorState.getCurrentContent().getPlainText();
      this.blog.title = this.state.title;
      updateSinglePost({
        slug: this.slug,
        post: this.blog
      }, () => {
        this.setState({ isSubmitPromptOpen: true });
        setTimeout(() => {
          this.setState({ isSubmitPromptOpen: false }, () => {
            this.props.history.push('/blog');
          });
        }, 1500);  
      })
    return;
    }

    fetch('/api/blogposts', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: this.state.title,
        category: this.state.category,
        body: this.state.editorState.getCurrentContent().getPlainText(),
      })
    }).then(function(response) {
      console.log(response) 
      return response.json();
    });
       this.props.history.block(() => {return true;})
      this.setState({ isSubmitPromptOpen: true });
      setTimeout(() => {
        this.setState({ isSubmitPromptOpen: false }, () => {
          this.props.history.push('/blog');
      });
    }, 1500); 
    //this.setState({editorState: EditorState.createEmpty()});
  }

  onModalCancel() {
    this.setState({isPromptOpen: false });
  }

  onModalLeave() {
    this.setState(
      { isPromptOpen: false, isEdited: false },
      () => {
        this.props.history.push('/blog');
      });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const {editorState} = this.state;
    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = s['RichEditor-editor'];
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' ' + s['RichEditor-hidePlaceholder'];
      }
    }

    return (
      <>
        {this.mode === 'EDIT'
         ? <h1>Edit blogpost</h1>
         : <h1>Create blogpost</h1>}

        <div className={s.InputFields}>
          <input onChange={this.handleChange} name="title" value={this.state.title} placeholder="Titel"/>
          <form onChange={this.handleChange} name="category">
            <select id="kategorie" name="kategorie" value={this.state.categoryDisplayValue}>
              <option value='test'>Test</option>
              <option value='docker'>Docker</option>
              <option value='react'>React</option>
              <option value='editor'>Editor</option>
              <option value='git'>Git</option>
            </select>
          </form>
        </div>

        <div className={s["RichEditor-root"]}>
          {/* <BlockStyleControls
            editorState={editorState}
            onToggle={this.toggleBlockType}
          />
          <InlineStyleControls
            editorState={editorState}
            onToggle={this.toggleInlineStyle}
          /> */}
          <div onClick={this.focus}>
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
        <div className={s['newBlogPostButtons']}>
          <button className={s['SubmitButton']} onClick={this.handleSubmit}>Submit</button>
          <button className={s['CancelButton']} onClick={this.handleCancelation}>Cancel</button>
        </div>

        <Prompt
          show={this.state.isPromptOpen}
          onHide={this.onModalCancel}
          onLeave={this.onModalLeave}
          message='Are you sure you want to leave?'
        />

        <PromptSuccess
          show={this.state.isSubmitPromptOpen}
          onLeave={this.onModalLeave}
        />
        </>
    );
  }
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
  case 'blockquote': return 'RichEditor-blockquote';
  default: return null;
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
    let className = s['RichEditor-styleButton'];
    if (this.props.active) {
      className += ' ' + s['RichEditor-activeButton'];
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}

const BLOCK_TYPES = [
  {label: 'H1', style: 'header-one'},
  {label: 'H2', style: 'header-two'},
  {label: 'H3', style: 'header-three'},
  {label: 'H4', style: 'header-four'},
  {label: 'H5', style: 'header-five'},
  {label: 'H6', style: 'header-six'},
  {label: 'Blockquote', style: 'blockquote'},
  {label: 'UL', style: 'unordered-list-item'},
  {label: 'OL', style: 'ordered-list-item'},
  {label: 'Code Block', style: 'code-block'},
];

const BlockStyleControls = (props) => {
  const {editorState} = props;
  const selection = editorState.getSelection();
  const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

  return (
    <div className={s['RichEditor-controls']}>
      {/* {BLOCK_TYPES.map((type) =>
                       <StyleButton
                         key={type.label}
                         active={type.style === blockType}
                         label={type.label}
                         onToggle={props.onToggle}
                         style={type.style}
                       />
                      )} */}
    </div>
  );
};

var INLINE_STYLES = [
  {label: 'Bold', style: 'BOLD'},
  {label: 'Italic', style: 'ITALIC'},
  {label: 'Underline', style: 'UNDERLINE'},
  {label: 'Monospace', style: 'CODE'},
];

const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <div className="RichEditor-controls">
      {/* {INLINE_STYLES.map((type) =>
                         <StyleButton
                           key={type.label}
                           active={currentStyle.has(type.style)}
                           label={type.label}
                           onToggle={props.onToggle}
                           style={type.style}
                         />
                        )} */}
    </div>
  );
};


export default withRouter(RichTextEditor);



