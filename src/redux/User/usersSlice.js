/* eslint-disable no-extra-semi */
import { createSlice } from '@reduxjs/toolkit'
import {
  signIn,
  fetchUserData,
  fetchUpdateUserData,
} from '../Actions/AsyncAction'

const token = window.localStorage.getItem('tokenAccess')

const initialState = {
  isAuthentified: !!token,
  errorMessage: '',
  email: '',
  firstName: '',
  lastName: '',
  userName: '',
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    signOut: (state) => {
      ;(state.isAuthentified = false),
        (state.errorMessage = null),
        localStorage.removeItem('tokenAccess'),
        (state.token = null),
        (state.firstName = ''),
        (state.lastName = ''),
        (state.userName = ''),
        (state.email = '')
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        ;(state.isAuthentified = true),
          (state.errorMessage = ''),
          (state.email = action.payload.email),
          (state.token = action.payload.token)
      })
      .addCase(signIn.rejected, (state, action) => {
        ;(state.isAuthentified = false),
          (state.errorMessage = action.payload || 'Login failed')
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        ;(state.firstName = action.payload.firstName),
          (state.lastName = action.payload.lastName),
          (state.userName = action.payload.userName)
      })
      .addCase(fetchUpdateUserData.fulfilled, (state, action) => {
        state.userName = action.payload.userName
      })
  },
})

export const { signOut } = usersSlice.actions

export default usersSlice.reducer
