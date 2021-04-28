import React from 'react'

import Editor from './Editor'
import requiredAuthentication from "./requiredAuthentication";
/*import requireAuthentication from "./requireAuthentication";*/

function EditorView({}) {
  return  <Editor />
}

console.log('requiredAuthentication',requiredAuthentication);

export default requiredAuthentication(EditorView);