import mongoose from 'mongoose'
import { chat } from '../models/chat'

const getChatsFromUser = async (id: string) => {
  const idUser = new mongoose.Types.ObjectId(id)
  const chats = await chat.find({ idUsers: idUser })
  return chats
}
const retrieveAllMessageFromChat = async (id: string) => {
  const idChat = new mongoose.Types.ObjectId(id)
  const dbchat = await chat.findById(idChat)
  return dbchat
}

const ChatService = {
  getChatsFromUser,
  retrieveAllMessageFromChat,
}

export default ChatService
