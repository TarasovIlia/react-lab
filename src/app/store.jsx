import { configureStore } from '@reduxjs/toolkit'
import modalUpReducer from '../features/modalUpSlice'
import modalInReducer from '../features/modalInSlice'
import userReducer from '../features/userSlice'
import userNameReducer from '../features/userName'

export default configureStore({
    reducer: {
        modalUp: modalUpReducer,
        modalIn: modalInReducer,
        user: userReducer,
        username: userNameReducer
    },
})
