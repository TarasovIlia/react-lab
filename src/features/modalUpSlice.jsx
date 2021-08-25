import { createSlice } from '@reduxjs/toolkit'

export const modalUpSlice = createSlice({
    name: 'modalUp',
    initialState: {
        value: false,
    },
    reducers: {
        activModalUp: (state) => {
            state.value = !state.value
        }
    }
})

export const { activModalUp } = modalUpSlice.actions 

export default modalUpSlice.reducer