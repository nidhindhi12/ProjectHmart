import { configureStore } from '@reduxjs/toolkit'
import countReducer from './slice/quantitySlice'
import authReducer from './slice/authSlice'
import toastReducer from './slice/toastSlice'
import modalReducer from './slice/modalSlice'





const store = configureStore({
    reducer: {
        count: countReducer,
        auth: authReducer,
        toast: toastReducer,
        modalShow: modalReducer,


    }
})

export default store





