import { configureStore } from '@reduxjs/toolkit'
import countReducer from './slice/quantitySlice'
import authReducer from './slice/authSlice'




const store = configureStore({
    reducer: {
        count: countReducer,
        auth: authReducer,


    }
})

export default store





