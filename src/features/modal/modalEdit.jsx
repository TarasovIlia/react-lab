import { createSlice } from '@reduxjs/toolkit'

export const modalEditItem = createSlice({
    name: 'modalEdit',
    initialState: {
        value: false,
    },
    reducers: {
        activModalEdit: (state) => {
            state.value = !state.value
        }
    }
})

export const { activModalEdit } = modalEditItem.actions 

export default modalEditItem.reducer