import { createSlice } from "@reduxjs/toolkit";

export const genresFilter = createSlice ({
    name : 'genres',
    initialState : {
        value : ''
    },
    reducers : {
        setGenresFilter:  (state, action) => {
            state.value = action.payload
        }
    }
})
export const { setGenresFilter } = genresFilter.actions

export default genresFilter.reducer