import { CookieOptions } from 'express'
import { IUserResponse } from '../interfaces/IUserResponse'
import jwt from 'jsonwebtoken'

const SECRET_KEY = 'adminadmin'

const accessTokenCookieOptions: CookieOptions = {
  expires: new Date(Date.now() + 7200 * 60 * 1000),
}

const createToken = (user: IUserResponse): string => {
  const payload = {
    username: user.username,
    email: user.email,
  }
  const token = jwt.sign(payload, SECRET_KEY)
  return token
}

const decodeToken = (token: any) => {
  return jwt.decode(token)
}

export const tokenUtils = { createToken, decodeToken, accessTokenCookieOptions }
