import { Types } from 'mongoose'

/**
 * This is the interface for the response of chats
 */
export interface IchatResult {
  _id: Types.ObjectId
  idUsers: Types.ObjectId[]
  idMessages: Types.ObjectId[]
}
