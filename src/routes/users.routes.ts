import express from 'express'
import UserController from '../controller/users.controller'
//import { auth } from '../middlewares/Auth'

const UserRoutes = express.Router()

/**
 * All routes are entered with their respective verb methods
 * and the controller functions to be executed.
 */

UserRoutes.get('/users', UserController.getUsers)
UserRoutes.get('/user/id/:id', UserController.getUserById)
UserRoutes.post('/user', UserController.createUser)
UserRoutes.get('/user/:email', UserController.getUserByEmail)
UserRoutes.put('/user/:email', UserController.updateUserByEmail)
UserRoutes.delete('/user/:email', UserController.deleteUserByEmail)
UserRoutes.post('/user/login', UserController.loginUser)

export default UserRoutes
