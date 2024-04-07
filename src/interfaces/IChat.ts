import { Types } from 'mongoose'

export interface IChat {
  _id: Types.ObjectId
  idUsers: Types.ObjectId[]
  idMessages: Types.ObjectId[]
}
