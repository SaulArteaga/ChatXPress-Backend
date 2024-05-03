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
    console.log(chatsObtained)

    if (chatsObtained.length == 0) {
      return res.status(400).send({ message: 'No hay ningun chat en la base de datos' })
    }
    const chatsFromUserFormatted: IchatsResponse[] = await ChatFormatter.getChatsFromUserFormatted(
      chatsObtained,
      req.params.id,
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
    console.log(chat)
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

// const getChatByIdUsers = async (req: Request, res: Response) => {
//   try {
//     const { idUser, emailGuestUser } = req.body
//     if (!idUser || !emailGuestUser) {
//       res.status(400).send({ message: 'No se ha introducido los datos correctamente en el body' })
//     } else {
//       const guestUser = await UserService.getUserByEmail(emailGuestUser)

//       if (guestUser) {
//         const chat = await ChatService.getChatByIdUsers(idUser, guestUser._id.toString())
//         if (chat.length == 0) {
//           res.status(400).send({ message: 'El chat no existe en la base de datos' })
//         } else {
//           res.status(200).send({
//             idChat: chat[0]._id,
//             nameGuestUser: guestUser.name,
//           })
//         }
//       } else {
//         res.status(400).send({ message: 'El email enviado no existe' })
//       }
//     }
//   } catch (error) {
//     res.status(500).send({ message: 'server error' })
//   }
// }

// const createNewChat = async (req: Request, res: Response) => {
//   try {
//     const { idUser, emailGuestUser } = req.body

//     if (!idUser || !emailGuestUser) {
//       res.status(400).send({ message: 'No se ha introducido los datos correctamente en el body' })
//     } else {
//       const guestUser = await UserService.getUserByEmail(emailGuestUser)
//       const currentUser = await UserService.getUserById(idUser)

//       if (guestUser && currentUser) {
//         const newChat: IChat = {
//           idUsers: [currentUser._id, guestUser._id],
//           idMessages: [],
//         }

//         const resultChatSaved = await ChatService.createNewChat(newChat)
//         if (resultChatSaved) {
//           res.status(400).send({ message: 'Error al introducir el nuevo chat' })
//         } else {
//           res.status(200).send({ message: 'Nuevo chat creado correctamente' })
//         }
//       } else {
//         res.status(400).send({ message: 'No existen los usuarios enviados' })
//       }
//     }
//   } catch (error) {
//     res.status(500).send({ message: 'server error' })
//   }
// }

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

const ChatsController = {
  getChatsFromUser,
  retrieveAllMessageFromChat,
  updateCurrentChat,
}

export default ChatsController

// Id del usuario logueado y el email del usuario invitado

// Comprobar que el email es del usuario invitado y no el tuyo

// Comprobar si existe un chat con esos dos usuarios

// Si existe devolverlo con todos los mensajes

// Si no se crea y devuelve uno nuevo sin ningun mensaje escrito
