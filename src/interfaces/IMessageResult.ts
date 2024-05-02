import { Types } from 'mongoose'
export interface IMessageResult {
  _id: Types.ObjectId
  content: String
  idUser: Types.ObjectId
  dateCreated: Date
}
