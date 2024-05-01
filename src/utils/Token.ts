import { CookieOptions } from 'express'
import { IUserResponse } from '../interfaces/IUserResponse'
import jwt from 'jsonwebtoken'

const SECRET_KEY = 'adminadmin'

const accessTokenCookieOptions: CookieOptions = {
  expires: new Date(Date.now() + 7200 * 60 * 1000),
  httpOnly: true,
}

const createToken = (user: IUserResponse): string => {
  const payload = {
    username: user.username,
    email: user.email,
  }
  const token = jwt.sign(payload, SECRET_KEY)
  return token
}

// const clearToken = (res: Response) => {
//   res.cookie('jwt', '', {
//     httpOnly: true,
//     expires: new Date(0),
//   })
// }

const decodeToken = (token: any) => {
  return jwt.decode(token)
}

export const tokenUtils = { createToken, decodeToken, accessTokenCookieOptions }
