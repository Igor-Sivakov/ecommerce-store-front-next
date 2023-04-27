import Cookies from "js-cookie"

import { ITokens } from "../types/user.interface"
import { EnumTokens } from "../types/user.interface"


export const getAccessToken = () => {
  const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
  return accessToken || null
}

export const getRefreshToken = () => {
  const refreshToken = Cookies.get(EnumTokens.REFRESH_TOKEN)
  return refreshToken || null
}

export const saveTokensStorage = (data: ITokens) => {
  Cookies.set(EnumTokens.ACCESS_TOKEN, data.accessToken)
  Cookies.set(EnumTokens.REFRESH_TOKEN, data.refreshToken)
}

export const removeFromStorage = () => {
  Cookies.remove(EnumTokens.ACCESS_TOKEN)
  Cookies.remove(EnumTokens.REFRESH_TOKEN)
}

