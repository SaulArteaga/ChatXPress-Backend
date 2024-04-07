import { Schema, model } from 'mongoose'

const chatSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    require: true,
    unique: true,
  },
  idUsers: {
    type: [{ type: Schema.ObjectId, ref: 'user' }],
    require: true,
  },
  idMessages: {
    type: [{ type: Schema.ObjectId, ref: 'message' }],
    require: true,
  },
})
export const chat = model('chat', chatSchema)
