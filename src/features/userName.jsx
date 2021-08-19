import { createSlice } from '@reduxjs/toolkit'

export const userName = createSlice({
    name: 'userName',
    initialState: {
        value: ""
    },
    reducers : {
        setUserName: (state, actions) => {
            state.value = state.payload;
        }
    }
})

export const { setUserName } = userName.actions

export default userName.reducer