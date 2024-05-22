import { Request, Response } from 'express'
import MessageService from '../services/messages.service'
import { IMessage } from '../interfaces/messages/IMessage'

/**
 * This function returns a count of all the messages stored in the database.
 * @param _req
 * @param res
 * @returns
 * If we have messages we return the count with a status of 200.
 * If we have no messages in the database we return a message
 * that says that there are no messages with a status of 400.
 * If the server fails, we return the error with a status of 500.
 */
const getTotalMessages = async (_req: Request, res: Response) => {
  const totalMessages = await MessageService.getTotalMessages()

  try {
    if (!totalMessages) {
      return res.status(400).send({ message: 'No hay ningun mensaje en la base de datos' })
    }
    return res.status(200).send({ totalMessage: totalMessages })
  } catch (error) {
    return res.status(500).send({ message: 'server error' })
  }
}

/**
 * This function returns a message stored in the database from one user given its id.
 * @param req
 * @param res
 * @returns
 * If we have messages we return the count with a status of 200.
 * If we have no messages in the database we return a message
 * that says that there are no messages with a status of 400.
 * If the server fails, we return the error with a status of 500.
 */
const getMessageById = async (req: Request, res: Response) => {
  const message = await MessageService.getMessageById(req.params.id)

  try {
    if (!message) {
      return res.status(400).send({ message: 'No hay ningun mensaje en la base de datos' })
    }
    return res.status(200).send(message)
  } catch (error) {
    return res.status(500).send({ message: 'server error' })
  }
}

/**
 * This function creates a message of type IMessage and stores it on the database
 * @param req
 * @param res
 * If the operation succeeds returns a boolean with a status of 200.
 * If we have an error when making the message we return a message
 * that says that there was an error with a status of 400.
 * If the server fails, we return the error with a status of 500.
 */
const createMessage = async (req: Request, res: Response) => {
  const date = new Date().toLocaleDateString('en-GB')
  const time = new Date().toLocaleTimeString('it-IT')
  const dateTime = `${date} ${time}`
  try {
    const newMessage: IMessage = {
      content: req.body.content,
      idUser: req.body.idUser,
      dateCreated: dateTime,
    }
    const resultCreateMessage = await MessageService.createMessage(newMessage)

    if (!resultCreateMessage) {
      return res.status(400).send({ message: 'Error al introducir un nuevo mensaje' })
    }
    return res.status(200).send(resultCreateMessage)
  } catch (error) {
    return res.status(500).send({ message: 'server error' })
  }
}

const MessageController = {
  getTotalMessages,
  getMessageById,
  createMessage,
}

export default MessageController
