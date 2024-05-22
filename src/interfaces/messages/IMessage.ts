import { Types } from 'mongoose'

/**
 * This is the interface for messages
 */

export interface IMessage {
  content: string
  idUser: Types.ObjectId
  dateCreated: string
}
