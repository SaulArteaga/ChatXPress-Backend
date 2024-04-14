import { user } from '../models/user'

const getUser = async () => {
  const users = await user.find()
  return users
}

const UserDb = {
  getUser,
}

export default UserDb
