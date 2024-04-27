import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const SECRET_KEY = 'adminadmin'

const ensureAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    res.status(401).send({ message: 'La peticion no tiene la cabecera de Authorization' })
  } else {
    try {
      const authorizationRequest = req.headers.authorization.replace(/['"]+/g, '').split(';')[0]
      const token = authorizationRequest.startsWith('jwt=') ? authorizationRequest.slice(4) : authorizationRequest
      jwt.verify(token, SECRET_KEY)
      next()
    } catch (error) {
      res.status(401).send({ message: 'Invalid token' })
    }
  }
}

export const auth = { ensureAuth }
