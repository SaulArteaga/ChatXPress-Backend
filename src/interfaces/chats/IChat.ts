import { Types } from 'mongoose'

/**
 * This is the interface for chats
 */

export interface IChat {
  idUsers: Types.ObjectId[]
  idMessages: Types.ObjectId[]
}
