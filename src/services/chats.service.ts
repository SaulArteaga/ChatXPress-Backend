import mongoose from 'mongoose'
import { chat } from '../models/chat'
import { IChat } from '../interfaces/IChat'
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

const getChatByIdUsers = async (idUser: string, idGuestUser: string) => {
  const idUsers = [idUser, idGuestUser]
  const dbchat = await chat.find({ idUsers: idUsers })
  return dbchat
}

const createNewChat = async (newchat: IChat) => {
  const _chat = new chat(newchat)
  const chatStore = await _chat.save()
  return chatStore
}

const updateCurrentChat = async (idChat: string, chatModified: IChat) => {
  const isUpdated = await chat.findByIdAndUpdate(idChat, chatModified)
  return isUpdated
}

const ChatService = {
  getChatsFromUser,
  retrieveAllMessageFromChat,
  getChatByIdUsers,
  createNewChat,
  updateCurrentChat,
}

export default ChatService
