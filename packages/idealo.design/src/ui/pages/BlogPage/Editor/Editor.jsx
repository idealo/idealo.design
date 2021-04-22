import React from 'react'

import { withRouter } from 'react-router'

import { Editor, EditorState, getDefaultKeyBinding, RichUtils, convertToRaw, convertFromRaw } from "draft-js";
import '~/draft-js/dist/Draft.css'
import s from './Editor.module.scss';
import Prompt from './Prompt';
import PromptSuccess from "./PromptSuccess";
import { fetchSinglePost, updateSinglePost, fetchDistinctCategories} from '../data';
import CreatableSelect from 'react-select/creatable';

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
      isSubmitPromptOpen: false,
      cats: [],
    };

    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => {
      const raw=convertToRaw(editorState.getCurrentContent());
      this.saveEditorContent(raw);
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
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSelectCreate = this.handleSelectCreate.bind(this);
  }

  async componentDidMount() {
    /*const rawEditorData=this.getSavedEditorData();
    if(rawEditorData != null){
      const contentState = convertFromRaw(rawEditorData);
      this.setState({
        editorState: EditorState.createWithContent(contentState)
      })
    }*/
    this.props.history.block((tx) => {
      if (this.state.isEdited) {
        this.setState({ lastHistoryLocation: tx.pathname, isPromptOpen: true });
        return !this.state.isEdited;
      }
      return true;
    })

    this.setState({ cats: await fetchDistinctCategories() });
    console.log('categories: ',this.state.cats);

    if(this.slug) {
      this.blog = await fetchSinglePost({ slug: this.slug });
      console.log('this....blog', this.blog);
      const contentState = convertFromRaw( this.blog.blogpostcontent);


      this.setState({
        blogpost: this.blog, // refactor
        title: this.blog.title,
        categorySlug: this.blog.categoryslug,
        categoryDisplayValue: this.blog.categorydisplayvalue,
      //editorState: EditorState.createWithContent(ContentState.createFromText(this.blog.text))
        editorState: EditorState.createWithContent(contentState)
      })
    }
  }

  saveEditorContent(data){
    localStorage.setItem('editorData',JSON.stringify(data))
  }

  getSavedEditorData() {
    const savedData = localStorage.getItem("editorData");
    return savedData ? JSON.parse(savedData) : null;
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
      this.blog.blogpostcontent = this.renderContentAsRawJs();
      this.blog.categoryDisplayValue = this.state.categoryDisplayValue;
      this.blog.categorySlug = this.state.categorySlug;
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

    const body = JSON.stringify({
      title: this.state.title,
      categoryDisplayValue: this.state.categoryDisplayValue,
      categorySlug: this.state.categorySlug,
      body: this.state.editorState.getCurrentContent().getPlainText(),
      blogpostcontent: this.renderContentAsRawJs(),
    })

    console.log(body)

    fetch('/api/blogposts', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body
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

    if (target.type === 'select-one') {
      const el = this.state.cats.filter(cat => cat.categoryslug === value).pop();
      this.setState({
        categoryDisplayValue: el.categorydisplayvalue
      })
    }

    this.setState({
      [name]: value
    });
  }

  handleSelectChange(newValue, actionMeta) {
    console.group('Value Changed');
    console.log(newValue);
    this.setState({
      categorySlug: newValue.categoryslug,
      categoryDisplayValue: newValue.categorydisplayvalue
    })
  }

  handleSelectCreate(inputValue) {
    console.group('Option created');
    console.log(inputValue);
    const { cats } = this.state;
    const newOption = {
      categoryslug: inputValue.toLowerCase().replace(/\W/g, ''),
      categorydisplayvalue: inputValue
    }
    this.setState({
      cats: [...cats, newOption],
      categorySlug: newOption.categoryslug,
      categoryDisplayValue: newOption.categorydisplayvalue
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
          <input className="form-control" onChange={this.handleChange} name="title" value={this.state.title} placeholder="Titel"/>
          <form name="category" className="select-container">
            {/*<select className='form-control' onChange={this.handleChange} id="kategorie" name="categorySlug" value={this.state.categorySlug}>
              <option value='1' disabled>select category</option>
              <option value="test">choose category</option>
              {this.state.cats.map((cat,idx) => (
                  <option key={idx} value={cat.categoryslug}>{cat.categorydisplayvalue}</option>
                  ))}
            </select>*/}
            <CreatableSelect
                getOptionLabel={option => option.categorydisplayvalue}
                getOptionValue={option => option.categoryslug}
                onChange={this.handleSelectChange}
                onCreateOption={this.handleSelectCreate}
                options={this.state.cats}
                value={{categorydisplayvalue: this.state.categoryDisplayValue, categoryslug: this.state.categorySlug}}
                getNewOptionData={(inputValue, optionLabel) => ({
                  categoryslug: inputValue,
                  categorydisplayvalue: optionLabel,
                  __isNew__: true
                })}
            />
          </form>
        </div>

        <div className={s["RichEditor-root"]}>
           <BlockStyleControls
            editorState={editorState}
            onToggle={this.toggleBlockType}
          />
          <InlineStyleControls
            editorState={editorState}
            onToggle={this.toggleInlineStyle}
          />
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
        {/*<pre>{this.renderContentAsRawJs()}</pre>*/}
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


export default withRouter(RichTextEditor);



