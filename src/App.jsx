import './App.css'
import { EditorView } from './features/editor/EditorView'
import { PreviewView } from './features/preview/PreviewView'
import React from 'react'

function App() {
  const [display, setDisplay] = React.useState("both")
  function handleClickEditor() {
    if(display === "both"){
      setDisplay("editor")
    } else {
      setDisplay("both")
    }
  }
  function handleClickPreview() {
    if(display === "both"){
      setDisplay("preview")
    } else {
      setDisplay("both")
    }
  }
  return (
        display === "editor" ? <div className="App solo"><EditorView handleClick={handleClickEditor} display={display}/> </div>
        : display === "preview" ? <div className="App solo"><PreviewView handleClick={handleClickPreview} display={display}/></div>
        : <div className="App"><EditorView handleClick={handleClickEditor} display={display}/> <PreviewView handleClick={handleClickPreview} display={display}/></div>
  )
}

export default App
