import { Types } from 'mongoose'
import { IchatResult } from '../interfaces/IChatResult'
import { IchatsResponse } from '../interfaces/IChatsResponse'
import MessageService from '../services/messages.service'
import UserService from '../services/users.service'
import { ICurrentChatRespose } from '../interfaces/ICurrentChatResponse'
import { IMessageResponse } from '../interfaces/IMessageResponse'
import MessageFormatter from './MessageFormatter'

/**
 * This function takes all the chats from an user with its
 * string and formats it into an object of type IChatsResponse.
 * @param resultChats
 * @param id
 * @returns The chats from an user formatted
 */
const getChatsFromUserFormatted = async (resultChats: IchatResult[], id: string) => {
  const chatFormated: IchatsResponse[] = await Promise.all(
    resultChats.map(async (chat: IchatResult) => {
      const newChat: IchatsResponse = {
        idChats: chat._id.toString(),
        nameGuestUser: '',
        lastMessage: '',
        time: '',
        idGuestUser: '',
      }

      const idGuestUser = getIdGuestUser(chat, id)
      newChat.idGuestUser = idGuestUser
      const guestUser = await UserService.getUserById(idGuestUser)

      if (guestUser) {
        newChat.nameGuestUser = guestUser.name
      }

      if (chat.idMessages.length != 0) {
        const idLastMessage = getIdLastMessage(chat)
        const lastMessage = await MessageService.getMessageById(idLastMessage)

        if (lastMessage) {
          newChat.lastMessage = lastMessage.content
          newChat.time = lastMessage.dateCreated
        }
      }

      return newChat
    }),
  )
  return chatFormated.filter((chat: IchatsResponse) => chat.lastMessage !== '')
}

/**
 * This function depends in getChatsFromUserFormatted, it returns all
 * the data formatted in an object of type ICurrentchatResponse
 * @param chat
 * @param name
 * @returns Returns the chat formatted
 */
const getCurrentChatFormatted = async (chat: IchatResult, name: string): Promise<ICurrentChatRespose> => {
  const currentChatFormatted: ICurrentChatRespose = {
    idChat: chat._id.toString(),
    name: name,
    messages: [],
  }

  if (chat.idMessages.length != 0) {
    const allChatMessages: IMessageResponse[] = await MessageFormatter.getAllMessagesFormatted(chat)
    currentChatFormatted.messages = allChatMessages
  }

  return currentChatFormatted
}

/**
 * This function returns the id of the guest user given the chat and an id
 * @param chat
 * @param id
 * @returns The id of the guest user
 */
const getIdGuestUser = (chat: IchatResult, id: string): string => {
  return chat.idUsers.filter((idUser: Types.ObjectId) => idUser.toString() != id)[0].toString()
}

/**
 * This function gets the id of the last message from a chat.
 * @param chat
 * @returns The id of the last message from a chat
 */
const getIdLastMessage = (chat: IchatResult): string => {
  return chat.idMessages[chat.idMessages.length - 1].toString()
}

const ChatFormatter = {
  getChatsFromUserFormatted,
  getCurrentChatFormatted,
}

export default ChatFormatter
