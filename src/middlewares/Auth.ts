import { NextFunction, Request, Response } from 'express'
import { tokenUtils } from '../utils/Token'

const ensureAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    res.status(401).send({ message: 'La peticion no tiene la cabecera de Authorization' })
  } else {
    try {
      const token = req.headers.authorization.replace(/['"]+/g, '').split(';')[0]
      tokenUtils.verifyToken(token)
      next()
    } catch (error) {
      res.status(401).send({ message: 'Invalid token' })
    }
  }
}

export const auth = { ensureAuth }
