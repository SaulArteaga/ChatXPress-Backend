import { Types } from 'mongoose'

export interface IchatResult {
  _id: Types.ObjectId
  idUsers: Types.ObjectId[]
  idMessages: Types.ObjectId[]
}
