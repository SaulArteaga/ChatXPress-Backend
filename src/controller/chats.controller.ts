import { Request, Response } from 'express'
import ChatService from '../services/chats.service'
import { IchatsResponse } from '../interfaces/IChatsResponse'
import ChatFormatter from '../utils/ChatFormatter'
import { ICurrentChatRespose } from '../interfaces/ICurrentChatResponse'
import UserService from '../services/users.service'

const getChatsFromUser = async (req: Request, res: Response) => {
  try {
    const chatsObtained = await ChatService.getChatsFromUser(req.params.id)

    if (chatsObtained.length == 0) {
      res.status(400).send({ message: 'No hay ningun chat en la base de datos' })
    }
    const chatsFromUserFormatted: IchatsResponse[] = await ChatFormatter.getChatsFromUserFormatted(
      chatsObtained,
      req.params.id,
    )

    res.status(200).send(chatsFromUserFormatted)
  } catch (error) {
    res.status(500).send({ message: 'server error' })
  }
}

const retrieveAllMessageFromChat = async (req: Request, res: Response) => {
  try {
    const { name } = req.body

    if (!name) {
      res.status(400).send({ message: 'No se ha introducido los datos correctamente en el body' })
    } else {
      const chat = await ChatService.retrieveAllMessageFromChat(req.params.id)
      if (!chat) {
        res.status(400).send({ message: 'No existe este chat' })
      } else {
        const currentChatFormatted: ICurrentChatRespose = await ChatFormatter.getCurrentChatFormatted(chat, name)
        res.status(200).send(currentChatFormatted)
      }
    }
  } catch (error) {
    res.status(500).send({ message: 'server error' })
  }
}

const getChatByIdUsers = async (req: Request, res: Response) => {
  try {
    const { idUser, emailGuestUser } = req.body

    if (!idUser || !emailGuestUser) {
      res.status(400).send({ message: 'No se ha introducido los datos correctamente en el body' })
    } else {
      const guestUser = await UserService.getUserByEmail(emailGuestUser)

      if (guestUser) {
        const chat = await ChatService.getChatByIdUsers(idUser, guestUser._id.toString())
        if (chat.length == 0) {
          res.status(400).send({ message: 'El chat no existe en la base de datos' })
        } else {
          res.status(200).send({
            idChat: chat[0]._id,
            nameGuestUser: guestUser.name,
          })
        }
      } else {
        res.status(400).send({ message: 'El email enviado no existe' })
      }
    }
  } catch (error) {
    res.status(500).send({ message: 'server error' })
  }
}

const ChatsController = {
  getChatsFromUser,
  retrieveAllMessageFromChat,
  getChatByIdUsers,
}

export default ChatsController

// Id del usuario logueado y el email del usuario invitado

// Comprobar que el email es del usuario invitado y no el tuyo

// Comprobar si existe un chat con esos dos usuarios

// Si existe devolverlo con todos los mensajes

// Si no se crea y devuelve uno nuevo sin ningun mensaje escrito
