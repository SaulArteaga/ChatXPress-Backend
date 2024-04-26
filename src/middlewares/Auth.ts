import { NextFunction, Request, Response } from 'express'

//const SECRET_KEY = 'gdlsEB3iGZEWPvk1a7Uu96P6NW6TgBbfqaS87mD4mF4'

const ensureAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    res.status(401).send({ message: 'La peticion no tiene la cabecera de Authorization' })
  } else {
    next()
  }
  //const token = req.headers.authorization.replace(/['"]+/g, '')
}

export const auth = { ensureAuth }
