import mongoose from 'mongoose'
import { chat } from '../models/chat'

const getChatsFromUser = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id)
  const chats = await chat.find({ idUsers: objectId })
  return chats
}

const ChatService = {
  getChatsFromUser,
}

export default ChatService
