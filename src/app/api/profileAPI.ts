import { instance } from "./api.interceptor"

import { ICard, ICardUpdate } from "../types/card.interface"
import { IUser, IUserUpdateData } from "../types/user.interface"


const PROFILE = '/user/profile'

export const profileAPI = {
  async getProfile() {
    const { data } = await instance.get<IUser>(PROFILE)

    return data
  },

  async updateProfile(profileData: IUserUpdateData) {
    const { data } = await instance.put<IUser>(PROFILE, profileData)

    return data
  },

  async getCard() {
    const { data } = await instance.get<ICard[]>(`${PROFILE}/card`)

    return data
  },

  async createUpdateCard(cardData: ICardUpdate) {
    const { data } = await instance.put<ICard[]>(`${PROFILE}/card`, cardData)

    return data
  }
}