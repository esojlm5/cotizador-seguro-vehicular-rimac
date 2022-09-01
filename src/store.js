import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/redux/counter/counterSlice'
import userReducer from '@/redux/User/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  }
})
