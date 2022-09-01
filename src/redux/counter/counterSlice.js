import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 15900,
  mount: 20
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 100
    },
    decrement: (state) => {
      state.value -= 100
    },
    incrementByAmount: (state, action) => {
      state.value = action.payload
    },
    incrementBaseMount: (state, action) => {
      state.mount += action.payload
    },
    decrementBaseMount: (state, action) => {
      state.mount -= action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount, incrementBaseMount, decrementBaseMount } = counterSlice.actions

export default counterSlice.reducer
