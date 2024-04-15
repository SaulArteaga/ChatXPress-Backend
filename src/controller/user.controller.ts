import { Request, Response } from 'express'
import UserService from '../services/user.service'

const getUsers = async (_req: Request, res: Response) => {
  const users = await UserService.getUsers()
  try {
    if (!users) {
      res.status(400).send({ message: 'No hay ningun usuario en la base de datos' })
    }
    res.status(200).send(users)
  } catch (error) {
    res.status(500).send(error)
  }
}

const getUser = async (req: Request, res: Response) => {
  const user = await UserService.getUser(req.params.id)
  try {
    if (!user) {
      res.status(400).send({ message: 'No hay ningun usuario en la base de datos' })
    }
    res.status(200).send(user)
  } catch (error) {
    res.status(500).send(error)
  }
}

const UserController = {
  getUsers,
  getUser,
}

export default UserController
