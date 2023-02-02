import React from 'react'
import { useSelector} from 'react-redux'
import { marked } from 'marked'

marked.setOptions({
    breaks: true
});

export const PreviewView = (props) => {
    const content = useSelector((state) => state.editor.editorContent)
    function createMarkup() {
        return{__html:marked.parse(content)}
    }
  return (
    <div className="previewWrap">
        <div className="toolbar">
            <i className="fa-brands fa-free-code-camp" title="no-stack-dub-sack"></i>
            Previewer
            <button onClick={props.handleClick}>
              {props.display !== "preview" ?<i className="fa fa-arrows-alt"></i> : <i className="fa fa-compress"></i>}
            </button>
          </div>
        <div id='preview' dangerouslySetInnerHTML={createMarkup()}></div>
    </div>
  )
}