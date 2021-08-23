import { createSlice } from '@reduxjs/toolkit'

export const modalChangePassword = createSlice({
    name: 'modalChangePassword',
    initialState: {
        value: false
    },
    reducers : {
        setModalChangePassword: (state, actions) => {
            state.value = !state.value;
        }
    }
})

export const { setModalChangePassword } = modalChangePassword.actions

export default modalChangePassword.reducer