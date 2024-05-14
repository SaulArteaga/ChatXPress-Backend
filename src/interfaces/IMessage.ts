import { Types } from 'mongoose'

/**
 * This is the interface for messages
 */

export interface IMessage {
  content: String
  idUser: Types.ObjectId
  dateCreated: String
}
