import { createAsyncThunk } from "@reduxjs/toolkit"
import omit from "lodash.omit"

import { errorCatch } from "@/app/api/api.helper"
import { removeFromStorage } from "@/app/api/auth.helper"

import { authAPI } from "@/app/api/authAPI"
import { profileAPI } from "@/app/api/profileAPI"

import { IAuthResponse, IEmailPassword, IUser, IUserUpdateData } from "@/app/types/user.interface"

import { authActions } from "./auth.slice"


export const newRegistration = createAsyncThunk<IAuthResponse, IUserUpdateData>('auth/newRegistration', async (data, thunkApi) => {
  try {
    const response = await authAPI.register(data)

    return response
  } catch (error: any) {
    thunkApi.dispatch(authActions.addError('Ups, something went wrong, failed to register...'))

    return thunkApi.rejectWithValue(error)
  }
})

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>('auth/login', async (data, thunkApi) => {
  try {
    const response = await authAPI.login(data)

    return response
  } catch (error: any) {
    if (error.response.status === 404) {
      thunkApi.dispatch(authActions.addError('invalid password or login, try again'))
    } else {
      thunkApi.dispatch(authActions.addError('Ups, something went wrong, failed to login...'))
    }

    return thunkApi.rejectWithValue(error)
  }
})

export const logout = createAsyncThunk('auth/logout', () => {
  removeFromStorage()
})

export const updateProfile = createAsyncThunk<{ user: IUser }, IUserUpdateData>('auth/update-profile', async (profileData, thunkApi) => {
  try {
    const response = await profileAPI.updateProfile(profileData)
    const updatedProfile = omit(response, 'password', 'createdAt', 'updatedAt')

    return { user: updatedProfile }
  } catch (error) {
    thunkApi.dispatch(authActions.addError('Ups, something went wrong, failed to update profile...'))

    return thunkApi.rejectWithValue(error)
  }
})

export const checkAuth = createAsyncThunk<IAuthResponse>('auth/check-auth', async (_, thunkApi) => {
  try {
    const response = await authAPI.getNewTokens()

    return response.data
  } catch (error) {
    if (errorCatch(error) === 'jwt expired') {
      thunkApi.dispatch(logout())
    }
    return thunkApi.rejectWithValue(error)
  }
})

