import { Schema, model } from 'mongoose'
import { IUser } from '../interfaces/IUser'

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  department: {
    type: String,
    require: true,
  },
  isActive: {
    type: Boolean,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  idRole: {
    type: Schema.Types.ObjectId,
    require: true,
    unique: true,
    ref: 'role',
  },
})

export const user = model<IUser>('users', userSchema)
