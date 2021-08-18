import { configureStore } from '@reduxjs/toolkit'
import modalUpReducer from '../features/modalUpSlice'
import modalInReducer from '../features/modalInSlice'
import userReducer from '../features/userSlice'

export default configureStore({
    reducer: {
        modalUp: modalUpReducer,
        modalIn: modalInReducer,
        user: userReducer,
    },
})
