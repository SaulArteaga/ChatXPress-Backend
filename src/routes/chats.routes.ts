import express from 'express'
import ChatsController from '../controller/chats.controller'

const ChatRoutes = express.Router()

ChatRoutes.get('/chats/:id', ChatsController.getChatsFromUser)

export default ChatRoutes
