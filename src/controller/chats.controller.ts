import { Request, Response } from 'express'
import ChatService from '../services/chats.service'
import { IchatsResponse } from '../interfaces/IChatsResponse'
import ChatFormatter from '../utils/ChatFormatter'

const getChatsFromUser = async (req: Request, res: Response) => {
  try {
    const resultChats = await ChatService.getChatsFromUser(req.params.id)

    if (!resultChats) {
      res.status(400).send({ message: 'No hay ningun chat en la base de datos' })
    }
    const chatFormated: IchatsResponse[] = await ChatFormatter.getChatsFormatted(resultChats, req.params.id)

    res.status(200).send(chatFormated)
  } catch (error) {
    res.status(500).send({ message: 'server error' })
  }
}

const retrieveAllMessageFromChat = async (req: Request, res: Response) => {
  try {
    const chat = await ChatService.retrieveAllMessageFromChat(req.params.id)
    if (!chat) {
      res.status(400).send({ message: 'No existe este chat' })
    }
    res.status(200).send(chat)
  } catch (error) {
    res.status(500).send({ message: 'server error' })
  }
}

/*
const getChatsFromUser = async (req: Request, res: Response) => {
  try {
    const resultChats = await ChatService.getChatsFromUser(req.params.id)

    if (!resultChats) {
      res.status(400).send({ message: 'No hay ningun chat en la base de datos' })
    }
    res.status(200).send(resultChats)
  } catch (error) {
    res.status(500).send({ message: 'server error' })
  }
}
*/

const ChatsController = {
  getChatsFromUser,
  retrieveAllMessageFromChat,
}

export default ChatsController
