import { Request, Response } from 'express'
import UserService from '../services/users.service'
import { IUser } from '../interfaces/IUser'
import RoleService from '../services/roles.service'

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

const getUserById = async (req: Request, res: Response) => {
  const user = await UserService.getUserById(req.params.id)
  try {
    if (!user) {
      res.status(400).send({ message: 'No existe el usuario en la base de datos' })
    }
    res.status(200).send(user)
  } catch (error) {
    res.status(500).send(error)
  }
}

const postUser = async (req: Request, res: Response) => {
  try {
    const idRoleUser = await RoleService.getStandarRoleId()
    const getEmail = await UserService.getUserByEmail(req.body.email)
    if (getEmail.length != 0) {
      res.status(400).send({ message: 'Error ya existe ese usuario' })
    } else {
      const newuser: IUser = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        department: req.body.department,
        isActive: false,
        password: req.body.password,
        idRole: idRoleUser,
      }

      const reponseUser = await UserService.postUser(newuser)

      if (!reponseUser) {
        res.status(400).send({ message: 'Error al introducir el nuevo usuario' })
      }
      res.status(200).send({ message: 'Nuevo usuario introducido correctamente' })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

const getUserByEmail = async (req: Request, res: Response) => {
  try {
    const userByEmail = await UserService.getUserByEmail(req.params.email)
    if (userByEmail.length == 0) {
      res.status(400).send({ message: 'No existe el usuario en la base de datos' })
    } else {
      res.status(200).send({
        name: userByEmail[0].name,
        email: userByEmail[0].email,
        password: userByEmail[0].password,
      })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

const UserController = {
  getUsers,
  getUserById,
  postUser,
  getUserByEmail,
}

export default UserController
