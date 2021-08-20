import { configureStore } from '@reduxjs/toolkit'
import modalUpReducer from '../features/modalUpSlice'
import modalInReducer from '../features/modalInSlice'
import modalChangePasswordReducer from '../features/modalChangePasswordSlice'

export default configureStore({
    reducer: {
        modalUp: modalUpReducer,
        modalIn: modalInReducer,
        modalChangePassword: modalChangePasswordReducer,
    },
})
