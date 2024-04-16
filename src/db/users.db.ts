import mongoose from 'mongoose'
import { user } from '../models/user'
import { IUser } from '../interfaces/IUser'

const getUsers = async () => {
  const users = await user.find()
  return users
}

const getUser = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id)
  const dbUser = await user.findById(objectId)
  return dbUser
}

const postUser = async (newUser: IUser) => {
  const _user = new user(newUser)
  const userStore = await _user.save()
  return userStore
}

const UserDb = {
  getUsers,
  getUser,
  postUser,
}

export default UserDb
