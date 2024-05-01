import mongoose from 'mongoose'
import { message } from '../models/message'
import { IMessage } from '../interfaces/IMessage'

const getTotalMessages = async () => {
  const messages = await message.find()
  return messages.length
}

const getMessageById = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id)
  const dbmessage = await message.findById(objectId)
  return dbmessage
}

const createMessage = async (newMessage: IMessage) => {
  const _message = new message(newMessage)
  const messageStore = await _message.save()
  return messageStore
}

const MessageService = {
  getTotalMessages,
  getMessageById,
  createMessage,
}

export default MessageService
