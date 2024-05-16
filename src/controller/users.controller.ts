import { Request, Response } from 'express'
import UserService from '../services/users.service'
import { IUser } from '../interfaces/IUser'
import RoleService from '../services/roles.service'
import { IUserResponse } from '../interfaces/IUserResponse'
import { tokenUtils } from '../utils/Token'
import { crypto } from '../utils/Crypto'

/**
 * This function has to return the list of
 * all users at a given endpoint (/api/v1/users).
 * @param res answer we return.
 * @returns
 * If we have users we return them with a status of 200.
 * If we have no users in the database we return a message
 * that there are no users with a status of 400.
 * If the server fails, we return the error with a status of 500.
 */

const getUsers = async (_req: Request, res: Response) => {
  const users = await UserService.getUsers()
  try {
    if (!users) {
      res.status(400).send({ message: 'No hay ningun usuario en la base de datos' })
    }
    res.status(200).send(users)
  } catch (error) {
    res.status(500).send({ message: 'server error' })
  }
}

const getTotalUsers = async (_req: Request, res: Response) => {
  const totalUsers = await UserService.getTotalUsers()
  try {
    if (!totalUsers) {
      res.status(400).send({ message: 'No existen usuarios en la base de datos' })
    }
    res.status(200).send(totalUsers)
  } catch (error) {
    res.status(500).send({ message: 'Server error' })
  }
}

/**
 * This function has to return a user by the id we specify
 * in the url at a given endpoint (/api/v1/user/:id).
 * @param req request where we collect the user's id.
 * @param res answer we return.
 * @returns
 * If you get the user we return it with a status of 200.
 * If you get no user, we return a message that
 * the user does not exist with a status of 400.
 * If the server fails, we return the error with a status of 500.
 */

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

/**
 * This function we must add a user in the database
 * at a given endpoint (/api/v1/user).
 * @param req request where we collect the user's email.
 * @param res answer we return.
 * @returns
 * If a user already exists with the email we want to enter,
 * we send a message that the user already exists with status 400.
 * If it is successfully added we indicate it with a message
 * and a status 200.
 * If it is not added correctly, an error message will be sent
 * with a status of 400.
 * If the server fails, we return the error with a status of 500.
 */

const createUser = async (req: Request, res: Response) => {
  try {
    const idRoleUser = await RoleService.getRoleId('user')
    const user = await UserService.getUserByEmail(req.body.email)
    if (user != null) {
      res.status(400).send({ message: 'Error ya existe ese usuario' })
    } else {
      const hashedPassword = await crypto.hashPassword(req.body.password)
      const newuser: IUser = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        department: req.body.department,
        isActive: false,
        password: hashedPassword,
        idRole: idRoleUser._id,
      }

      const resultCreateUser = await UserService.createUser(newuser)

      if (!resultCreateUser) {
        res.status(400).send({ message: 'Error al introducir el nuevo usuario' })
      }
      res.status(200).send({ message: 'Nuevo usuario introducido correctamente' })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * This function has to return a user by the email we specify
 * in the url at a given endpoint (/api/v1/user/email/:email).
 * @param req request where we collect the user's email.
 * @param res answer we return.
 * @returns
 * If you get the user we return it with a status of 200.
 * If you get no user, we return a message that
 * the user does not exist with a status of 400.
 * If the server fails, we return the error with a status of 500.
 */

const getUserByEmail = async (req: Request, res: Response) => {
  try {
    const user = await UserService.getUserByEmail(req.params.email)
    if (user == null) {
      res.status(400).send({ message: 'No existe el usuario en la base de datos' })
    } else {
      res.status(200).send(user)
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * This function must modify a user with an email passed by the url
 * and using the data provided in the body, at a given endpoint
 * (/api/v1/update:email).
 * @param req request where we collect the user's email and the body.
 * @param res answer we return.
 * @returns
 * If it is successfully updated we indicate it with a message
 * and a status 200.
 * If it is not updated correctly, an error message will be sent
 * with a status of 400.
 * If the server fails, we return the error with a status of 500.
 */

const updateUserByEmail = async (req: Request, res: Response) => {
  try {
    const idRoleUser = await RoleService.getRoleId('user')
    const hashedPassword = await crypto.hashPassword(req.body.password)
    const updatedUser: IUser = {
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      department: req.body.department,
      isActive: false,
      password: hashedPassword,
      idRole: idRoleUser._id,
    }

    const resultUpdateUser = await UserService.updateUserByEmail(req.params.email, updatedUser)
    if (resultUpdateUser.modifiedCount == 0) {
      res.status(400).send({ message: 'No existe usuario en la base de datos' })
    } else {
      res.status(200).send({ message: 'Usuario actualizado correctamente' })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * This function must delete a user with an email passed by the url,
 * at a given endpoint (/api/v1/delete:email).
 * @param req request where we collect the user's email.
 * @param res answer we return.
 * @returns
 * If it is successfully deleted we indicate it with a message
 * and a status 200.
 * If it is not removed correctly, an error message will be sent
 * with a status of 400.
 * If the server fails, we return the error with a status of 500.
 */

const deleteUserByEmail = async (req: Request, res: Response) => {
  try {
    const resultDeleteUser = await UserService.deleteUserByEmail(req.params.email)
    if (resultDeleteUser.deletedCount == 0) {
      res.status(400).send({ message: 'No existe usuario en la base de datos' })
    } else {
      res.status(200).send({ message: 'Usuario eliminado correctamente' })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

const loginUser = async (req: Request, res: Response) => {
  try {
    const roleUser = await RoleService.getRoleId(req.body.nameRole)
    const user = await UserService.getUserByEmail(req.body.email)
    if (user != null) {
      const comparePassword = await crypto.comparePassword(req.body.password, user.password.toString())
      if (comparePassword && roleUser._id.toString() === user.idRole.toString()) {
        const userResponse: IUserResponse = {
          id: user._id.toString(),
          username: user.name,
          email: user.email,
        }
        const token = tokenUtils.createToken(userResponse)

        res.status(200).send({ ...userResponse, token })
      } else {
        res.status(400).send({ message: 'Usuario incorrecto' })
      }
    } else {
      res.status(400).send({ message: 'Error no existe el usuario' })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

const UserController = {
  getUsers,
  getUserById,
  createUser,
  getUserByEmail,
  updateUserByEmail,
  deleteUserByEmail,
  loginUser,
  getTotalUsers,
}

export default UserController
