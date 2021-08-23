import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: false
    },
    reducers: {
        userLogIn: (state, action) => {
            state.value += action.payload;
        }
    },
})

export const { userLogIn } = userSlice.actions

export default userSlice.reducer