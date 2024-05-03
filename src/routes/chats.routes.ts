import express from 'express'
import ChatsController from '../controller/chats.controller'

const ChatRoutes = express.Router()

ChatRoutes.get('/chats/:iduser', ChatsController.getChatsFromUser)
ChatRoutes.post('/chat', ChatsController.retrieveAllMessageFromChat)
//ChatRoutes.post('/chat/users', ChatsController.getChatByIdUsers)
//ChatRoutes.post('/newchat', ChatsController.createNewChat)
ChatRoutes.put('/chat/:id', ChatsController.updateCurrentChat)

export default ChatRoutes
