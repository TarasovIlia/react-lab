import { createSlice } from "@reduxjs/toolkit";

export const adminValidation = createSlice ({
    name: 'admib',
    initialState: {
        state: false
    },
    reducers: {
        setAdminSignIp : (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setAdminSignIp } = adminValidation.actions

export default adminValidation.reducer