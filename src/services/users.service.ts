import UserDb from '../db/users.db'
import { IUser } from '../interfaces/IUser'

const getUsers = async () => {
  return await UserDb.getUsers()
}

const getUserById = async (id: string) => {
  return await UserDb.getUserById(id)
}

const postUser = async (newUser: IUser) => {
  return await UserDb.postUser(newUser)
}

const getUserByEmail = async (email: string) => {
  return await UserDb.getUserByEmail(email)
}

const UserService = {
  getUsers,
  getUserById,
  postUser,
  getUserByEmail,
}

export default UserService
