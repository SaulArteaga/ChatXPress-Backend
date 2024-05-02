import { Types } from 'mongoose'
import { IchatResult } from '../interfaces/IChatResult'
import { IchatsResponse } from '../interfaces/IChatsResponse'
import MessageService from '../services/messages.service'
import UserService from '../services/users.service'

const getChatsFormatted = async (resultChats: IchatResult[], id: string) => {
  const chatFormated: IchatsResponse[] = await Promise.all(
    resultChats.map(async (chat: IchatResult) => {
      const newChat: IchatsResponse = {
        idChats: chat._id.toString(),
        nameGuestUser: '',
        lastMessage: '',
        time: '',
      }
      const idGuestUser = getIdGuestUser(chat, id)
      const guestUser = await UserService.getUserById(idGuestUser)

      if (guestUser) {
        newChat.nameGuestUser = guestUser.name
      }

      const idLastMessage = getIdLastMessage(chat)
      const lastMessage = await MessageService.getMessageById(idLastMessage)

      if (lastMessage) {
        newChat.lastMessage = lastMessage.content
        newChat.time = lastMessage.dateCreated.toString()
      }

      return newChat
    }),
  )
  return chatFormated
}

const getIdGuestUser = (chat: IchatResult, id: string): string => {
  return chat.idUsers.filter((idUser: Types.ObjectId) => idUser.toString() != id)[0].toString()
}

const getIdLastMessage = (chat: IchatResult): string => {
  return chat.idMessages[chat.idMessages.length - 1].toString()
}

const ChatFormatter = {
  getChatsFormatted,
}

export default ChatFormatter
