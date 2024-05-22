import { Types } from 'mongoose'

/**
 * This is the interface for users
 */

export interface IUser {
  name: string
  lastname: string
  email: string
  department: string
  isActive: Boolean
  password: string
  idRole: Types.ObjectId
}
