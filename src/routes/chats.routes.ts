import express from 'express'
import ChatsController from '../controller/chats.controller'

const ChatRoutes = express.Router()

ChatRoutes.get('/chats/user/:id', ChatsController.getChatsFromUser)
ChatRoutes.get('/chats/:id', ChatsController.retrieveAllMessageFromChat)

export default ChatRoutes
