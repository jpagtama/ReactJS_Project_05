import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import cartSlice from './cartSlice'

const store = configureStore({
    reducer: { 
        user: authSlice.reducer,
        cart: cartSlice.reducer
    }
})

export default store