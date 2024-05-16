import { Request, Response } from 'express'
import ChatService from '../services/chats.service'
import { IchatsResponse } from '../interfaces/IChatsResponse'
import ChatFormatter from '../utils/ChatFormatter'
import { ICurrentChatRespose } from '../interfaces/ICurrentChatResponse'
import { IChat } from '../interfaces/IChat'
import MessageService from '../services/messages.service'
import mongoose from 'mongoose'
import { IchatResult } from '../interfaces/IChatResult'

const getChatsFromUser = async (req: Request, res: Response) => {
  try {
    const chatsObtained = await ChatService.getChatsFromUser(req.params.iduser)

    if (chatsObtained.length == 0) {
      return res.status(400).send({ message: 'No hay ningun chat en la base de datos' })
    }
    const chatsFromUserFormatted: IchatsResponse[] = await ChatFormatter.getChatsFromUserFormatted(
      chatsObtained,
      req.params.iduser,
    )

    return res.status(200).send(chatsFromUserFormatted)
  } catch (error) {
    return res.status(500).send({ message: 'server error' })
  }
}

const retrieveAllMessageFromChat = async (req: Request, res: Response) => {
  try {
    const { idUser, idGuestUser, name } = req.body

    if (!name || !idUser || !idGuestUser) {
      return res.status(400).send({ message: 'No se ha introducido los datos correctamente en el body' })
    }

    const chat = await ChatService.getChatByIdUsers(idGuestUser, idUser)
    if (!chat) {
      const objectIdUser = new mongoose.Types.ObjectId(idGuestUser)
      const objectIdGuestUser = new mongoose.Types.ObjectId(idUser)
      const newChat: IChat = {
        idUsers: [objectIdUser, objectIdGuestUser],
        idMessages: [],
      }
      const resultChatSaved: IchatResult = await ChatService.createNewChat(newChat)
      if (!resultChatSaved) {
        return res.status(400).send({ message: 'Error al introducir el nuevo chat' })
      }
      const currentChatFormatted: ICurrentChatRespose = await ChatFormatter.getCurrentChatFormatted(
        resultChatSaved,
        name,
      )
      return res.status(200).send(currentChatFormatted)
    }

    const currentChatFormatted: ICurrentChatRespose = await ChatFormatter.getCurrentChatFormatted(chat, name)
    return res.status(200).send(currentChatFormatted)
  } catch (error) {
    return res.status(500).send({ message: 'server error' })
  }
}

const updateCurrentChat = async (req: Request, res: Response) => {
  try {
    const { idMessage } = req.body

    if (!idMessage) {
      res.status(400).send({ message: 'No se ha introducido los datos correctamente en el body' })
    } else {
      const currentMessage = await MessageService.getMessageById(idMessage)

      if (!currentMessage) {
        res.status(400).send({ message: 'El mensaje no existe en la base de datos' })
      } else {
        const currentChat = await ChatService.retrieveAllMessageFromChat(req.params.id)
        if (currentChat) {
          currentChat.idMessages.push(currentMessage._id)
          const resultChatUpdated = await ChatService.updateCurrentChat(req.params.id, currentChat)
          if (!resultChatUpdated) {
            res.status(400).send({ message: 'No se ha modificado correctamente en la base de datos' })
          } else {
            res.status(200).send({ message: 'Chat actualizado correctamente' })
          }
        }
      }
    }
  } catch (error) {
    res.status(500).send({ message: 'server error' })
  }
}

const getChatCount = async (_req: Request, res: Response) => {
  try {
    const chatCount = await ChatService.getChatsCount()
    if (!chatCount) {
      res.status(400).send({ message: 'No existen usuarios en la base de datos' })
    }
    res.status(200).send(chatCount)
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: 'Server error' })
  }
}

const ChatsController = {
  getChatsFromUser,
  retrieveAllMessageFromChat,
  updateCurrentChat,
  getChatCount,
}

export default ChatsController
