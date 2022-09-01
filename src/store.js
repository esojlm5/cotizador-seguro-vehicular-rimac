import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/redux/counter/counterSlice'
import userReducer from '@/redux/user/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  }
})
