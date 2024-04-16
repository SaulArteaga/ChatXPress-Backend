import mongoose from 'mongoose'
import { user } from '../models/user'
import { IUser } from '../interfaces/IUser'

const getUsers = async () => {
  const users = await user.find()
  return users
}

const getUserById = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id)
  const dbUser = await user.findById(objectId)
  return dbUser
}

const postUser = async (newUser: IUser) => {
  const _user = new user(newUser)
  const userStore = await _user.save()
  return userStore
}

const getUserByEmail = async (email: string) => {
  const userByEmail = await user.find({ email: email })
  return userByEmail
}

const UserDb = {
  getUsers,
  getUserById,
  postUser,
  getUserByEmail,
}

export default UserDb
