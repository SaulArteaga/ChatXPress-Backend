import { Types } from 'mongoose'

/**
 * This is the interface for messages
 */

export interface IMessage {
  _id: Types.ObjectId
  content: String
  idUser: Types.ObjectId
  dateCreated: Date
}
