import { createSlice } from "@reduxjs/toolkit";

export const sortTypeParams = createSlice ({
    name : 'genres',
    initialState : {
        value : 1
    },
    reducers : {
        setSortType:  (state, action) => {
            state.value = action.payload
        }
    }
})
export const { setSortType } = sortTypeParams.actions

export default sortTypeParams.reducer