import { createSlice } from "@reduxjs/toolkit";

export const ageFilter = createSlice ({
    name : 'age',
    initialState : {
        value : 0
    },
    reducers : {
        setAgeFilter:  (state, action) => {
            state.value = action.payload
        }
    }
})
export const { setAgeFilter } = ageFilter.actions

export default ageFilter.reducer