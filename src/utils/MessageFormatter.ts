import { Types } from 'mongoose'
import { IchatResult } from '../interfaces/IChatResult'
import { IMessageResponse } from '../interfaces/IMessageResponse'
import MessageService from '../services/messages.service'

/**
 * This function returns the messages from
 * a chat formatted with the type IMessageResponse.
 * @param chat
 * @returns The messages formatted
 */
const getAllMessagesFormatted = async (chat: IchatResult) => {
  const allMessages: IMessageResponse[] = await Promise.all(
    chat.idMessages.map(async (idMessage: Types.ObjectId) => {
      const newMessage: IMessageResponse = {
        _id: idMessage.toString(),
        content: '',
        idUser: '',
        dateCreated: '',
      }
      const message = await MessageService.getMessageById(idMessage.toString())

      if (message) {
        newMessage.content = message.content
        newMessage.idUser = message.idUser.toString()
        newMessage.dateCreated = message.dateCreated.toString()
      }

      return newMessage
    }),
  )
  return allMessages
}

const MessageFormatter = {
  getAllMessagesFormatted,
}

export default MessageFormatter
