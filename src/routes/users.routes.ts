import express from 'express'
import UserController from '../controller/user.controller'

const UserRoutes = express.Router()

UserRoutes.get('/users', UserController.getUsers)
UserRoutes.get('/user/:id', UserController.getUser)
UserRoutes.post('/user', UserController.postUser)

export default UserRoutes
