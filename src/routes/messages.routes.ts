import express from 'express'
import MessageController from '../controller/messages.controller'
import { auth } from '../middlewares/Auth'

const MessageRoutes = express.Router()

MessageRoutes.get('/message/total', auth.ensureAuth, MessageController.getTotalMessages)
MessageRoutes.get('/message/:id', auth.ensureAuth, MessageController.getMessageById)
MessageRoutes.post('/message', auth.ensureAuth, MessageController.createMessage)

export default MessageRoutes
