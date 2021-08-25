import { createSlice } from "@reduxjs/toolkit";

export const sortCriteriaParams = createSlice ({
    name : 'genres',
    initialState : {
        value : 'name'
    },
    reducers : {
        setSortParams:  (state, action) => {
            state.value = action.payload
        }
    }
})
export const { setSortParams } = sortCriteriaParams.actions

export default sortCriteriaParams.reducer