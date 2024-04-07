import { Types } from 'mongoose'

export interface IMessage {
  _id: Types.ObjectId
  content: String
  idUser: Types.ObjectId
  dateCreated: Date
}
