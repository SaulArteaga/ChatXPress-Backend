import mongoose from 'mongoose'
// import { IRole } from '../interfaces/IRole'

const Schema = mongoose.Schema

const roleSchema = new Schema({
  nameRole: {
    type: String,
    require: true,
  },
})
export const roles = mongoose.model('roles', roleSchema)
