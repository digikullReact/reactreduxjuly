import { configureStore } from '@reduxjs/toolkit'
import  counter  from './slices/slice'
import todo from "./slices/todo"

export const store = configureStore({
  reducer: {
    counter:counter,
    todos:todo
  },
})