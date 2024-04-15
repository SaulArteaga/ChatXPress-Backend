import UserDb from '../db/users.db'
import { IUser } from '../interfaces/IUser'

const getUsers = async () => {
  return await UserDb.getUsers()
}

const getUser = async (id: string) => {
  return await UserDb.getUser(id)
}

const postUser = async (newUser: IUser) => {
  return await UserDb.postUser(newUser)
}

const UsersService = {
  getUsers,
  getUser,
  postUser,
}

export default UsersService
