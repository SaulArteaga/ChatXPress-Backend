import mongoose from 'mongoose'

/**
 * This is the schema of the user roles
 * where we indicate the required fields
 */

const Schema = mongoose.Schema

const roleSchema = new Schema({
  nameRole: {
    type: String,
    require: true,
  },
})

/**
 * We export the model relating it to the mongo collection
 * we indicate
 */

export const role = mongoose.model('roles', roleSchema)
