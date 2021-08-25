import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: localStorage.getItem('userLogIn')
    },
    reducers: {
        setUserLogIn: (state) => {
            state.value = !state.value;
        }
    },
})

export const { setUserLogIn } = userSlice.actions

export default userSlice.reducer