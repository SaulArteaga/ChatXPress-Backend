import mongoose from 'mongoose'
import { message } from '../models/message'
import { IMessage } from '../interfaces/IMessage'

/**
 * This function returns a count of the messages that are stored in the database.
 * @returns The amount of messages in the database
 */
const getTotalMessages = async () => {
  const messages = await message.find()
  return messages.length
}

/**
 * Returns a message from the database given its id.
 * @param id
 * @returns A message
 */
const getMessageById = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id)
  const dbmessage = await message.findById(objectId)
  return dbmessage
}

/**
 * This funcion returns a boolean when creating a new message
 * in the database given its id.
 * @param newMessage
 * @returns
 */
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
