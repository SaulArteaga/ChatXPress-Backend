import UserDb from '../db/users.db'
import { IUser } from '../interfaces/IUser'

/**
 * This method call the calls the getUser method
 * returns its result.
 * @returns The data of all users.
 */

const getUsers = async () => {
  return await UserDb.getUsers()
}

/**
 * This method call the calls the getUserById method
 * returns its result.
 * @param id Id of the user we want to search for.
 * @returns The data of the user searched.
 */

const getUserById = async (id: string) => {
  return await UserDb.getUserById(id)
}

/**
 * This method call the calls the postUser method
 * returns its result.
 * @param newUser New user we want to introduce.
 * @returns If the user was added.
 */

const postUser = async (newUser: IUser) => {
  return await UserDb.postUser(newUser)
}

/**
 * This method call the calls the getUserByEmail method
 * returns its result.
 * @param email Email of the user we want to search for.
 * @returns The data of the user searched.
 */

const getUserByEmail = async (email: string) => {
  return await UserDb.getUserByEmail(email)
}

/**
 * This method call the calls the updateUserByEmail method
 * returns its result.
 * @param email Email of the user we want to update.
 * @param body The data we want to update in the user.
 * @returns If it has been modified correctly.
 */

const updateUserByEmail = async (email: string, body: IUser) => {
  return await UserDb.updateUserByEmail(email, body)
}

/**
 * This method call the calls the deleteUserByEmail method
 * returns its result.
 * @param email Email of the user we want to delete.
 * @returns If it has been correctly removed.
 */

const deleteUserByEmail = async (email: string) => {
  return await UserDb.deleteUserByEmail(email)
}

const UserService = {
  getUsers,
  getUserById,
  postUser,
  getUserByEmail,
  updateUserByEmail,
  deleteUserByEmail,
}

export default UserService
