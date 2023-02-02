import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    editorContent: `# Welcome to my React Markdown Previewer!
    \n## This is a sub-heading...
    \n### And here's some other cool stuff:
    \nHeres some code, \`<div></div>\`, between 2 backticks.
    \n\`\`\`
    \n// this is multi-line code:
    \nfunction anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
        return multiLineCode;
    }
}
        \n\`\`\`
        \nYou can also make text **bold**... whoa!
        \nOr _italic_.
        \nOr... wait for it... **_both!_**
        \nAnd feel free to go crazy ~~crossing stuff out~~.
   
        \nThere's also [links](https://www.freecodecamp.org), and
        \n> Block Quotes!
    \nAnd if you want to get really crazy, even tables:
    \nWild Header | Crazy Header | Another Header?
    \n------------ | ------------- | -------------
    \nYour content can | be here, and it | can be here....
    \n And here. | Okay. | I think we get it.
    \n- And of course there are lists.
    \n  - Some are bulleted.
    \n     - With different indentation levels.
    \n        - That look like this.
       
    \n1. And there are numbered lists too.
    \n1. Use just 1s if you want!
    \n1. And last but not least, let's not forget embedded images:
    \n
    \n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
    `
}

const editorSlice = createSlice({
    name:'editor',
    initialState,
    reducers: {
        modified: (state,action) => {
            state.editorContent = action.payload
        }
    }
})

export default editorSlice.reducer
export const {modified} = editorSlice.actions