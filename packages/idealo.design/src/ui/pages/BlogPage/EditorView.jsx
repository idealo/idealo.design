import React from 'react'

import Editor from './Editor'
import requireAuthentication from "./requireAuthentication";

function EditorView({}) {
  return  <Editor />
}
export default requireAuthentication(EditorView);