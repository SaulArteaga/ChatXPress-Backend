import express from 'express'
import ChatsController from '../controller/chats.controller'
import { auth } from '../middlewares/Auth'

const ChatRoutes = express.Router()

/**
 * All routes are entered with their respective verb methods
 * and the controller functions to be executed.
 */

ChatRoutes.get('/chats/active', auth.ensureAuth, ChatsController.getChatCount)
ChatRoutes.get('/chats/:iduser', auth.ensureAuth, ChatsController.getChatsFromUser)
ChatRoutes.post('/chat', auth.ensureAuth, ChatsController.retrieveAllMessageFromChat)
ChatRoutes.put('/chat/:id', auth.ensureAuth, ChatsController.updateCurrentChat)

export default ChatRoutes
