import { CookieOptions } from 'express'
import { IUserResponse } from '../interfaces/users/IUserResponse'
import jwt from 'jsonwebtoken'

const SECRET_KEY = 'adminadmin'

const accessTokenCookieOptions: CookieOptions = {
  expires: new Date(Date.now() + 7200 * 60 * 1000),
}

/**
 * This function creates a token with the user set as a payload.
 * @param user
 * @returns The token signed
 */
const createToken = (user: IUserResponse): string => {
  const payload = {
    username: user.username,
    email: user.email,
  }
  const token = jwt.sign(payload, SECRET_KEY)
  return token
}

/**
 * This function decodes the token given through params.
 * @param token
 * @returns The decodified token
 */
const decodeToken = (token: any) => {
  return jwt.decode(token)
}

/**
 * This function verifies the given token through params
 * and returns true if it is good and false if it is not.
 * @param token
 * @returns Boolean
 */
const verifyToken = (token: any) => {
  return jwt.verify(token, SECRET_KEY)
}

export const tokenUtils = { createToken, decodeToken, verifyToken, accessTokenCookieOptions }
