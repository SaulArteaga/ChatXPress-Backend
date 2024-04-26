import { Response } from 'express'
import { IUserResponse } from '../interfaces/IUserResponse'
import jwt from 'jsonwebtoken'

const SECRET_KEY = 'gdlsEB3iGZEWPvk1a7Uu96P6NW6TgBbfqaS87mD4mF4'

const createToken = (res: Response, user: IUserResponse) => {
  const payload = {
    username: user.username,
    email: user.email,
  }
  const token = jwt.sign(payload, SECRET_KEY, {
    expiresIn: '10m',
  })

  res.cookie('jwt', token, {
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 60 * 60 * 1000,
  })
}

const clearToken = (res: Response) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  })
}

const decodeToken = (token: any) => {
  return jwt.decode(token)
}

export const tokenUtils = { createToken, clearToken, decodeToken }
