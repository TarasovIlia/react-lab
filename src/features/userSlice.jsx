import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: false,
    },
    reducers: {
        userLogIn: (state) => {
            state.value = !state.value;
        }
    },
})

export const { userLogIn } = userSlice.actions

export default userSlice.reducer