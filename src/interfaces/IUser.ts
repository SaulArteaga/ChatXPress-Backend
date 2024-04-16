import { Types } from 'mongoose'

export interface IUser {
  name: String
  lastname: String
  email: String
  department: String
  isActive: Boolean
  password: String
  idRole: Types.ObjectId
}
