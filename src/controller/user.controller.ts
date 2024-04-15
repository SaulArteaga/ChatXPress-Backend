import { Request, Response } from 'express'
import UserService from '../services/user.service'
import { role } from '../models/role'
import { IUser } from '../interfaces/IUser'
//import mongoose from 'mongoose'
import { DBRef } from 'bson'

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

const postUser = async (req: Request, res: Response) => {
  const idRoleUser = await role.find({ nameRole: 'user' })
  //const idRole = idRoleUser[0]._id.toString()
  const user: IUser = {
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    department: req.body.department,
    isActive: false,
    password: req.body.password,
    idRole: new DBRef('roles', idRoleUser[0]._id),
  }

  const newUser = await UserService.postUser(user)
  try {
    if (!newUser) {
      res.status(400).send({ message: 'Error al introducir el nuevo usuario' })
    }
    res.status(200).send({ message: 'Nuevo usuario introducido correctamente' })
  } catch (error) {
    res.status(500).send(error)
  }
}

const UserController = {
  getUsers,
  getUser,
  postUser,
}

export default UserController