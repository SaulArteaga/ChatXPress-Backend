import { Request, Response } from 'express'
import MessageService from '../services/messages.service'

const getTotalMessages = async (_req: Request, res: Response) => {
  const totalMessages = await MessageService.getTotalMessages()

  try {
    if (!totalMessages) {
      res.status(400).send({ message: 'No hay ningun mensaje en la base de datos' })
    }
    res.status(200).send({ totalMessage: totalMessages })
  } catch (error) {
    res.status(500).send({ message: 'server error' })
  }
}

const MessageController = {
  getTotalMessages,
}

export default MessageController
