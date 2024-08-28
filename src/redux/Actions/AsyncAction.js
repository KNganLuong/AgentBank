import { createAsyncThunk } from '@reduxjs/toolkit'
import { logIn } from '../../api/logIn'
import { getUserData } from '../../api/getUserData'
import { updateDataUser } from '../../api/updateDataUser'

export const signIn = createAsyncThunk(
  'users/signIn',
  async (payload, { rejectWithValue }) => {
    const { email, password } = payload
    const logInData = {
      email,
      password,
    }

    try {
      const response = await logIn(JSON.stringify(logInData))

      return { email, token: response.token }
    } catch (err) {
      return rejectWithValue('Login failed')
    }
  }
)

export const fetchUserData = createAsyncThunk(
  'users/fetchUserData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUserData()

      return {
        firstName: response.firstName,
        lastName: response.lastName,
        userName: response.userName,
      }
    } catch (err) {
      return rejectWithValue('Connection failed')
    }
  }
)

export const fetchUpdateUserData = createAsyncThunk(
  'users/fetchUpdateUserData',
  async ({ userName }, { rejectWithValue }) => {
    try {
      const response = await updateDataUser({ userName })
      return {
        userName: response.userName,
      }
    } catch (err) {
      return rejectWithValue('Failed to update user')
    }
  }
)
