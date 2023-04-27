import axios from "axios"

import { getContentType } from "./api.helper"
import { getRefreshToken, saveTokensStorage } from "./auth.helper"
import { instance } from './api.interceptor'

import { IAuthResponse } from "../types/user.interface"
import { IEmailPassword, IUserUpdateData } from './../types/user.interface'


const AUTH = '/auth'

export const authAPI = {

  async login(loginData: IEmailPassword) {
    const { data } = await instance.post<IAuthResponse>(`${AUTH}/login`, loginData)

    if (data.accessToken) saveTokensStorage(data)

    return data
  },

  async register(registerData: IUserUpdateData) {
    const { data } = await instance.post<IAuthResponse>(`${AUTH}/register`, registerData)

    if (data.accessToken) saveTokensStorage(data)

    return data
  },

  async getNewTokens() {
    const refreshToken = getRefreshToken()

    const response = await axios.post<string, { data: IAuthResponse }>(
      process.env.SERVER_URL + `${AUTH}/login/access-token`,
      { refreshToken },
      {
        headers: getContentType()
      }
    )

    if (response.data.accessToken) saveTokensStorage(response.data)

    return response
  }
}