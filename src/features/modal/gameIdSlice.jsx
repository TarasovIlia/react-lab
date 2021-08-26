import { createSlice } from '@reduxjs/toolkit'

export const gameIdSlice = createSlice({
    name: 'modalEdit',
    initialState: {
        value: '',
    },
    reducers: {
        setGameId: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setGameId } = gameIdSlice.actions 

export default gameIdSlice.reducer