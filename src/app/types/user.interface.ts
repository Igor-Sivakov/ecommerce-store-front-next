
export interface IUser {
  id: number
  email: string
  firstName: string
  lastName: string
  gender: string
}

export interface IUserUpdateData extends Omit<IUser, 'id'> {
  password: string
}

export interface IEmailPassword {
  email: string
  password: string
}

export interface ITokens {
  accessToken: string
  refreshToken: string
}

export interface IAuthResponse extends ITokens {
  user: IUser
}

export enum EnumTokens {
  REFRESH_TOKEN = 'refreshToken',
  ACCESS_TOKEN = 'accessToken'
}