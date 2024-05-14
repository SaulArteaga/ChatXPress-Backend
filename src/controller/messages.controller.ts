import { Request, Response } from 'express'
import MessageService from '../services/messages.service'
import { IMessage } from '../interfaces/IMessage'

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

const getMessageById = async (req: Request, res: Response) => {
  const message = await MessageService.getMessageById(req.params.id)

  try {
    if (!message) {
      res.status(400).send({ message: 'No hay ningun mensaje en la base de datos' })
    }
    res.status(200).send(message)
  } catch (error) {
    res.status(500).send({ message: 'server error' })
  }
}
const createMessage = async (req: Request, res: Response) => {
  const d = new Date()
  const date = `${d.getDay()}-${d.getMonth()}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
  try {
    const newMessage: IMessage = {
      content: req.body.content,
      idUser: req.body.idUser,
      dateCreated: date,
    }
    const resultCreateMessage = await MessageService.createMessage(newMessage)

    if (!resultCreateMessage) {
      res.status(400).send({ message: 'Error al introducir un nuevo mensaje' })
    }
    res.status(200).send(resultCreateMessage)
  } catch (error) {
    res.status(500).send({ message: 'server error' })
  }
}

const MessageController = {
  getTotalMessages,
  getMessageById,
  createMessage,
}

export default MessageController
