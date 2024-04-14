import { Request, Response } from 'express'
import UserService from '../services/user.service'

const getUser = async (_req: Request, res: Response) => {
  const users = await UserService.getUser()
  try {
    if (!users) {
      res.status(400).send({ message: 'No hay ningun usuario en la base de datos' })
    }
    res.status(200).send(users)
  } catch (error) {
    res.status(500).send(error)
  }
}

const UserController = {
  getUser,
}

export default UserController
