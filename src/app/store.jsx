import { configureStore } from '@reduxjs/toolkit'
import modalUpReducer from '../features/modal/modalUpSlice'
import modalInReducer from '../features/modal/modalInSlice'
import modalChangePasswordReducer from '../features/modal/modalChangePasswordSlice'
import userInReducer from '../features/userLogInData/userSlice'
import genresFilterReducer from '../features/filter/genre/genresFilterSlice'
import ageFilterReducer from '../features/filter/age/ageFilterSlice'
import sortCriteriaParamsReducer from '../features/filter/sort/sortSlice'
import sortTypeParamsReducer from '../features/filter/sort/sortTypeSlice'
import adminInReducer from '../features/userLogInData/adminSlice'
import modalEditItemReducer from '../features/modal/modalEdit'
import gameIdSliceReducer from '../features/modal/gameIdSlice'



export default configureStore({
    reducer: {
        modalUp: modalUpReducer,
        modalIn: modalInReducer,
        modalChangePassword: modalChangePasswordReducer,
        userIn: userInReducer,
        genres: genresFilterReducer,
        age: ageFilterReducer,
        sortCriteriaParams: sortCriteriaParamsReducer,
        sortTypeParams: sortTypeParamsReducer,
        admin: adminInReducer,
        edit: modalEditItemReducer,
        id: gameIdSliceReducer,
    },
})
