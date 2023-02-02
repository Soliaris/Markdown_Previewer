import { configureStore } from "@reduxjs/toolkit"
import editorReducer from "../features/editor/editorSlice"


const store = configureStore ({
    reducer: {
        editor: editorReducer
    }
})

export default store