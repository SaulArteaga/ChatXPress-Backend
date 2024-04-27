import { Response } from 'express'
import { IUserResponse } from '../interfaces/IUserResponse'
import jwt from 'jsonwebtoken'

//const SECRET_KEY = 'hCGdEBacVjMoNKyq_WNmwqs6keON4x2ddHpylXiGma0'
const SECRET_KEY = 'adminadmin'

const createToken = (res: Response, user: IUserResponse) => {
  const payload = {
    username: user.username,
    email: user.email,
  }
  const token = jwt.sign(payload, SECRET_KEY, {
    expiresIn: '3min',
  })

  res.cookie('jwt', token, {
    httpOnly: true,
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
