import {createSlice} from "@reduxjs/toolkit";

const INITIAL_STATE = {
    dark: false,
}

const themeSlice = createSlice({
    name: 'theme',
    initialState: INITIAL_STATE,
    reducers: {
        toggleTheme: (state) => {
            state.dark = !state.dark
        },
    }
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer
