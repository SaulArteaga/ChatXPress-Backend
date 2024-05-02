import express from 'express'
import ChatsController from '../controller/chats.controller'

const ChatRoutes = express.Router()

ChatRoutes.get('/chats/user/:id', ChatsController.getChatsFromUser)
ChatRoutes.post('/chat/:id', ChatsController.retrieveAllMessageFromChat)
ChatRoutes.post('/chat', ChatsController.getChatByIdUsers)

export default ChatRoutes
