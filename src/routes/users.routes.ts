import express from 'express'
import UserController from '../controller/users.controller'

const UserRoutes = express.Router()

/**
 * All routes are entered with their respective verb methods
 * and the controller functions to be executed.
 */

UserRoutes.get('/users', UserController.getUsers)
UserRoutes.get('/user/:id', UserController.getUserById)
UserRoutes.post('/user', UserController.postUser)
UserRoutes.get('/user/email/:email', UserController.getUserByEmail)
UserRoutes.put('/user/update/:email', UserController.updateUserByEmail)
UserRoutes.delete('/user/delete/:email', UserController.deleteUserByEmail)

export default UserRoutes
