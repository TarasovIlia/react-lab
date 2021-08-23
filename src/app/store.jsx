import { configureStore } from '@reduxjs/toolkit'
import modalUpReducer from '../features/modal/modalUpSlice'
import modalInReducer from '../features/modal/modalInSlice'
import modalChangePasswordReducer from '../features/modal/modalChangePasswordSlice'
import userInReducer from '../features/userLogInData/userSlice'

export default configureStore({
    reducer: {
        modalUp: modalUpReducer,
        modalIn: modalInReducer,
        modalChangePassword: modalChangePasswordReducer,
        userIn: userInReducer,
    },
})
