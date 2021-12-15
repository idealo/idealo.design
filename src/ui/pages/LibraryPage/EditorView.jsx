import React from "react"
import Editor from "./Editor/Editor"
import requiredAuthentication from "../requiredAuthentication";

function EditorView(){
    return <Editor/>
}

export default requiredAuthentication(EditorView)