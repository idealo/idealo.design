import React from "react";
import { Editor, EditorState, getDefaultKeyBinding, RichUtils, ContentState } from "draft-js";
import '../style/RichText.css'
import '../../node_modules/draft-js/dist/Draft.css'
import './RichTextEditor.css';
import Prompt from './Prompt';
import { fetchSinglePost, updateSinglePost } from '../Data';

class RichTextEditor extends React.Component {
  constructor(props) {
    super(props);
    const searchParams = new URLSearchParams(props.location.search);
    this.blog = null;
    this.slug = searchParams.get('slug');
    this.mode = this.slug ? 'EDIT' : 'CREATE';
    this.state = {
      editorState: EditorState.createEmpty(),
      isPromptOpen: false,
      isEdited: false,
      lastHistoryLocation: '',
    };

    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => {
      this.setState({ editorState, isEdited: true });
    }

    this.handleKeyCommand = this._handleKeyCommand.bind(this);
    this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
    this.toggleBlockType = this._toggleBlockType.bind(this);
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
    this.handleCanceliation = this.handleCanceliation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onModalCancel = this.onModalCancel.bind(this);
    this.onModalLeave = this.onModalLeave.bind(this);
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
      this.setState({ editorState: EditorState.createWithContent(ContentState.createFromText(this.blog.text)) })
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
      return;
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

  handleCanceliation(e) {
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
      updateSinglePost({
        slug: this.slug,
        post: this.blog
      })
      this.props.history.push(`/blog/${this.slug}`);
      return;
    }

    fetch('http://localhost:8080/api/blogposts', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify({body: this.state.editorState.getCurrentContent().getPlainText()})
    }).then(function(response) {
      console.log(response)
      return response.json();
    });
    this.setState({editorState: EditorState.createEmpty()});
  }

  onModalCancel() {
    this.setState({isPromptOpen: false });
  }

  onModalLeave() {
    this.setState(
      { isPromptOpen: false, isEdited: false },
      () => {
        this.props.history.push(this.state.lastHistoryLocation);
      });
  }

  render() {
    const {editorState} = this.state;

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'RichEditor-editor';
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    return (
      <div>
        <div className="RichEditor-root">
          <BlockStyleControls
            editorState={editorState}
            onToggle={this.toggleBlockType}
          />
          <InlineStyleControls
            editorState={editorState}
            onToggle={this.toggleInlineStyle}
          />
          <div className={className} onClick={this.focus}>
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
        <div className="newBlogPostButtons">
          <button className="SubmitButton" onClick={this.handleSubmit}>Submit</button>
          <button className="CancelButton" onClick={this.handleCanceliation}>Cancel</button>
        </div>

        <Prompt 
          show={this.state.isPromptOpen} 
          onHide={this.onModalCancel}
          onLeave={this.onModalLeave}
          message='Are you sure you want to leave?'

        />
      </div>

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
          let className = 'RichEditor-styleButton';
          if (this.props.active) {
            className += ' RichEditor-activeButton';
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
          <div className="RichEditor-controls">
            {BLOCK_TYPES.map((type) =>
              <StyleButton
                key={type.label}
                active={type.style === blockType}
                label={type.label}
                onToggle={props.onToggle}
                style={type.style}
              />
            )}
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
            {INLINE_STYLES.map((type) =>
              <StyleButton
                key={type.label}
                active={currentStyle.has(type.style)}
                label={type.label}
                onToggle={props.onToggle}
                style={type.style}
              />
            )}
          </div>
        );
      };


export default RichTextEditor;
