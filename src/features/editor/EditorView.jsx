import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { modified } from './editorSlice'

export const EditorView = (props) => {
  const dispatch = useDispatch()
  const content = useSelector((state) => state.editor.editorContent)
  
  function handleChange(event) {
    dispatch(modified(event.target.value))
  }
  
  return (
    <div className="editorWrap">
      <div className="toolbar">
        <i className="fa-brands fa-free-code-camp" title="no-stack-dub-sack"></i>
        Editor
        <button onClick={props.handleClick}>
          {props.display !== "editor" ?<i className="fa fa-arrows-alt"></i> : <i className="fa fa-compress"></i>}
        </button>
      </div>
      <textarea onChange={handleChange} id="editor" name="editor" value={content}/>
    </div>
  )
}
