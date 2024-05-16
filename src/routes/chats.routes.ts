import express from 'express'
import ChatsController from '../controller/chats.controller'

const ChatRoutes = express.Router()

ChatRoutes.get('/chats/active', ChatsController.getChatCount)
ChatRoutes.get('/chats/:iduser', ChatsController.getChatsFromUser)
ChatRoutes.post('/chat', ChatsController.retrieveAllMessageFromChat)
ChatRoutes.put('/chat/:id', ChatsController.updateCurrentChat)

export default ChatRoutes
