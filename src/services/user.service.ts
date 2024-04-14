import UserDb from '../db/users.db'

const getUser = async () => {
  return await UserDb.getUser()
}

const UserService = {
  getUser,
}

export default UserService
