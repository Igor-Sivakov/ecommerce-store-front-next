import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit"

import { IUser } from "@/app/types/user.interface"
import { checkAuth, login, logout, newRegistration, updateProfile } from "./auth.actions"


interface IInitialStateAuth {
  user: IUser | null
  error: string | null
  isLoading: boolean
}

const initialState: IInitialStateAuth = {
  user: null,
  error: null,
  isLoading: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addError(state, action: PayloadAction<string>) {
      state.error = action.payload
    },
    removeError(state) {
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(logout.fulfilled, (state) => {
        state.user = null
        state.isLoading = false
      })
      .addCase(checkAuth.fulfilled, (state, { payload }) => {
        state.user = payload.user
      })
      .addMatcher(isAnyOf(newRegistration.pending, login.pending, updateProfile.pending), (state) => {
        state.isLoading = true
      })
      .addMatcher(isAnyOf(newRegistration.fulfilled, login.fulfilled, updateProfile.fulfilled), (state, { payload }) => {
        state.user = payload.user
        state.isLoading = false
      })
      .addMatcher(isAnyOf(newRegistration.rejected, login.rejected, updateProfile.rejected), (state) => {
        state.user = null
        state.isLoading = false
      })
  }
})

export const authActions = authSlice.actions

export default authSlice.reducer