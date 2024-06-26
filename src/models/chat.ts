import { Schema, model } from 'mongoose'
import { IChat } from '../interfaces/chats/IChat'

/**
 * This is the scheme of the chats
 * where we indicate the required fields
 */

const chatSchema = new Schema<IChat>({
  idUsers: {
    type: [{ type: Schema.ObjectId, ref: 'user' }],
    require: true,
  },
  idMessages: {
    type: [{ type: Schema.ObjectId, ref: 'message' }],
    require: true,
  },
})

/**
 * We export the model relating it to the mongo collection
 * we indicate
 */

export const chat = model<IChat>('chats', chatSchema)
