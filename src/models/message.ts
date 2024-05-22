import { Schema, model } from 'mongoose'
import { IMessage } from '../interfaces/messages/IMessage'

/**
 * This is the scheme of the messages
 * where we indicate the required fields
 */

const messageSchema = new Schema<IMessage>({
  content: {
    type: String,
    require: true,
  },
  idUser: {
    type: Schema.Types.ObjectId,
    require: true,
    unique: true,
    ref: 'user',
  },
  dateCreated: {
    type: String,
    require: true,
  },
})

/**
 * We export the model relating it to the mongo collection
 * we indicate
 */

export const message = model<IMessage>('messages', messageSchema)
