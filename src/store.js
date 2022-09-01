import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/redux/Counter/CounterSlice'
import userReducer from '@/redux/User/UserSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  }
})
