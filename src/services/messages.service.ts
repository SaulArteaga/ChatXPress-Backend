import mongoose from 'mongoose'
import { message } from '../models/message'

const getTotalMessages = async () => {
  const messages = await message.find()
  return messages.length
}

const getMessageById = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id)
  const dbmessage = await message.findById(objectId)
  return dbmessage
}

const MessageService = {
  getTotalMessages,
  getMessageById,
}

export default MessageService
