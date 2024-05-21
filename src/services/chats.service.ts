import mongoose from 'mongoose'
import { chat } from '../models/chat'
import { IChat } from '../interfaces/IChat'

/**
 * This function retrieves all the chats from the database given an user id.
 * @param id
 * @returns All chats from an user id
 */
const getChatsFromUser = async (id: string) => {
  const idUser = new mongoose.Types.ObjectId(id)
  const chats = await chat.find({ idUsers: idUser })
  return chats
}

/**
 * This function retrieves all the messages from a chat given an user id.
 * @param id
 * @returns All messages from one chat given an id.
 */
const retrieveAllMessageFromChat = async (id: string) => {
  const idChat = new mongoose.Types.ObjectId(id)
  const dbchat = await chat.findById(idChat)
  return dbchat
}

/**
 * This function gets the chat given two user id.
 * @param idUser
 * @param idGuestUser
 * @returns The chat id given the two user ids.
 */
const getChatByIdUsers = async (idUser: string, idGuestUser: string) => {
  const dbchat = await chat.findOne({ $and: [{ idUsers: idUser }, { idUsers: idGuestUser }] })
  return dbchat
}

/**
 * This function returns a count of the chats in the database.
 * @returns An object with the count of the chats in the database
 */
const getChatsCount = async () => {
  const chatsActive = await chat.find().countDocuments()
  return { chatsActive }
}

/**
 * This function creates a new chat and it storages it on the database.
 * @param newchat
 * @returns A boolean if the chat has been storage.
 */
const createNewChat = async (newchat: IChat) => {
  const _chat = new chat(newchat)
  const chatStore = await _chat.save()
  return chatStore
}

/**
 * This function updates the given chat having its id and the chat modified through params.
 * @param idChat
 * @param chatModified
 * @returns A value if it has been updated
 */
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
  getChatsCount,
}

export default ChatService
