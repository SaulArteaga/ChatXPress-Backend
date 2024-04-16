import express from 'express'
import UserController from '../controller/users.controller'

const UserRoutes = express.Router()

UserRoutes.get('/users', UserController.getUsers)
UserRoutes.get('/user/:id', UserController.getUserById)
UserRoutes.post('/user', UserController.postUser)
UserRoutes.get('/user/email/:email', UserController.getUserByEmail)

export default UserRoutes
