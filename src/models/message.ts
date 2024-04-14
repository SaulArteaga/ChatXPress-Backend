import { Schema, model } from 'mongoose'
import { IMessage } from '../interfaces/IMessage'

const messageSchema = new Schema<IMessage>({
  _id: {
    type: Schema.Types.ObjectId,
    require: true,
    unique: true,
  },
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
    type: Date,
    require: true,
  },
})

export const message = model<IMessage>('messages', messageSchema)
