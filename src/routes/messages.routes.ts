import express from 'express'
import MessageController from '../controller/messages.controller'

const MessageRoutes = express.Router()

MessageRoutes.get('/message/total', MessageController.getTotalMessages)
MessageRoutes.get('/message/:id', MessageController.getMessageById)

export default MessageRoutes
