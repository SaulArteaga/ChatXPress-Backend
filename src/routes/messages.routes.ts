import express from 'express'
import MessageController from '../controller/messages.controller'

const MessageRoutes = express.Router()

MessageRoutes.get('/total/messages', MessageController.getTotalMessages)

export default MessageRoutes
