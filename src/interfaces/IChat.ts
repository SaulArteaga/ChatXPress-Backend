import { Types } from 'mongoose'

/**
 * This is the interface for chats
 */

export interface IChat {
  _id: Types.ObjectId
  idUsers: Types.ObjectId[]
  idMessages: Types.ObjectId[]
}
