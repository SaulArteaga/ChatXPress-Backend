import express from 'express'
import UserController from '../controller/getUser.controller'

const UserRoutes = express.Router()

UserRoutes.get('/users', UserController.getUser)

export default UserRoutes
