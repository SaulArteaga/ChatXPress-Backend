import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    require: true,
    unique: true,
  },
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
  },
})

export const user = model('user', userSchema)
