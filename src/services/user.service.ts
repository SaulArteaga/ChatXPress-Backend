import UserDb from '../db/users.db'

const getUsers = async () => {
  return await UserDb.getUsers()
}

const getUser = async (id: string) => {
  return await UserDb.getUser(id)
}

const UsersService = {
  getUsers,
  getUser,
}

export default UsersService
