import { Types } from 'mongoose'

export interface IUser {
  _id: Types.ObjectId
  name: String
  lastname: String
  email: String
  department: String
  isActive: Boolean
  password: String
  idRole: Types.ObjectId
}
