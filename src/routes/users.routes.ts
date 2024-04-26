import express from 'express'
import UserController from '../controller/users.controller'
import { auth } from '../middlewares/Auth'

const UserRoutes = express.Router()

/**
 * All routes are entered with their respective verb methods
 * and the controller functions to be executed.
 */

UserRoutes.get('/users', [auth.ensureAuth], UserController.getUsers)
UserRoutes.get('/user/:id', [auth.ensureAuth], UserController.getUserById)
UserRoutes.post('/user', [auth.ensureAuth], UserController.postUser)
UserRoutes.get('/user/email/:email', [auth.ensureAuth], UserController.getUserByEmail)
UserRoutes.put('/user/update/:email', [auth.ensureAuth], UserController.updateUserByEmail)
UserRoutes.delete('/user/delete/:email', [auth.ensureAuth], UserController.deleteUserByEmail)
UserRoutes.post('/user/login', UserController.loginUser)

export default UserRoutes
