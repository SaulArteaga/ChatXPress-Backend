import { Types } from 'mongoose'

/**
 * This is the interface for users
 */

export interface IUser {
  name: String
  lastname: String
  email: String
  department: String
  isActive: Boolean
  password: String
  idRole: Types.ObjectId
}
