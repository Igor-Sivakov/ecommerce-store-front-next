import axios from "axios"

import { errorCatch, getContentType } from "./api.helper"
import { getAccessToken, removeFromStorage } from "./auth.helper"

import { authAPI } from "./authAPI"


export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || process.env.SERVER_URL,
  headers: getContentType()
})

instance.interceptors.request.use((config) => {
  const accessToken = getAccessToken()

  if (config.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`


  return config
})

instance.interceptors.response.use(
  config => config,
  async error => {
    const originalRequest = error.config

    if (
      (error.response.status === 401 ||
        errorCatch(error) === 'jwt expired' ||
        errorCatch(error) === 'jwt must be provided') &&
      error.config && !error.config_isRetry
    ) {
      originalRequest._isRetry = true
      try {
        await authAPI.getNewTokens()
        return instance.request(originalRequest)
      } catch (error) {
        if (errorCatch(error) === 'jwt expired')
          removeFromStorage()
      }
    }

    throw error
  })