import { Request, Response } from 'express'
import ChatService from '../services/chats.service'

const getChatsFromUser = async (req: Request, res: Response) => {
  try {
    const chats = await ChatService.getChatsFromUser(req.params.id)
    console.log(chats)
    if (!chats) {
      res.status(400).send({ message: 'No hay ningun chat en la base de datos' })
    }
    res.status(200).send(chats)
  } catch (error) {
    res.status(500).send({ message: 'server error' })
  }
}

const ChatsController = {
  getChatsFromUser,
}

export default ChatsController
