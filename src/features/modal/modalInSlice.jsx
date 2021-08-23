import { createSlice } from '@reduxjs/toolkit'

export const modalInSlice = createSlice({
    name: 'modalIn',
    initialState: {
        value: false,
    },
    reducers: {
        activModalIn: (state) => {
            state.value = !state.value
        }
    }
})

export const { activModalIn } = modalInSlice.actions 

export default modalInSlice.reducer