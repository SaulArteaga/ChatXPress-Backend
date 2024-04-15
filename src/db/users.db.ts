import mongoose from 'mongoose'
import { user } from '../models/user'
// import { BSON, ObjectId } from 'bson'

const getUsers = async () => {
  const users = await user.find()
  return users
}

const getUser = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id)
  const dbUser = await user.findById(objectId)
  return dbUser
}

const UserDb = {
  getUsers,
  getUser,
}

export default UserDb
