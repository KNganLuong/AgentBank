import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './User/usersSlice'

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
})

export default store
