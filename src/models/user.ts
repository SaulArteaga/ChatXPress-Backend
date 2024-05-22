import { Schema, model } from 'mongoose'
import { IUser } from '../interfaces/users/IUser'

/**
 * This is the schema of a user where
 * we indicate the required fields
 */

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
    unique: true,
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
    ref: 'role',
  },
})

/**
 * We export the model relating it to the mongo collection
 * we indicate
 */

export const user = model<IUser>('users', userSchema)
