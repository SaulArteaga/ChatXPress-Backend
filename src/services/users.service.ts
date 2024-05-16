import { user } from '../models/user'
import { IUser } from '../interfaces/IUser'
import mongoose from 'mongoose'
import RoleService from './roles.service'

/**
 * This function searches and returns all the users
 * in the database.
 * @returns The data of all users.
 */

const getUsers = async () => {
  const idRole = (await RoleService.getRoleId('user'))._id
  const users = await user.find({ idRole: idRole })
  return users
}

/**
 * This function searches for a user by the id
 * that we receive as a parameter.
 * @param id Id of the user we want to search for.
 * @returns The data of the user searched.
 */

const getUserById = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id)
  const dbUser = await user.findById(objectId)
  return dbUser
}

/**
 * This function introduces a new user into the collection.
 * @param newUser New user we want to introduce.
 * @returns If the user was added.
 */

const createUser = async (newUser: IUser) => {
  const _user = new user(newUser)
  const userStore = await _user.save()
  return userStore
}

/**
 * This function searches for a user by the email
 * that we receive as a parameter.
 * @param email Email of the user we want to search for.
 * @returns The data of the user searched.
 */

const getUserByEmail = async (email: string) => {
  const userByEmail = await user.find({ email: email })
  return userByEmail[0]
}

const getTotalUsers = async () => {
  const totalUsers = await user.find().countDocuments()
  return { totalUsers }
}

const getActiveUsers = async () => {
  const activeUsers = await user.find({ isActive: true }).countDocuments()
  return { activeUsers }
}

/**
 * This function updates a user by receiving his email
 * as a parameter and the data we want to modify.
 * @param email Email of the user we want to update.
 * @param body The data we want to update in the user.
 * @returns If it has been modified correctly.
 */

const updateUserByEmail = async (email: string, body: IUser) => {
  const isUpdated = await user.updateOne({ email: email }, body)
  return isUpdated
}

/**
 * This function deletes a user by receiving
 * his email as a parameter.
 * @param email Email of the user we want to delete.
 * @returns If it has been correctly removed.
 */

const deleteUserByEmail = async (email: string) => {
  const isDeleted = await user.deleteOne({ email: email })
  return isDeleted
}

const UserService = {
  getUsers,
  getUserById,
  createUser,
  getUserByEmail,
  getTotalUsers,
  getActiveUsers,
  updateUserByEmail,
  deleteUserByEmail,
}

export default UserService
