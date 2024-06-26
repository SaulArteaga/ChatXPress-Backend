import express from 'express'
import UserController from '../controller/users.controller'
import { auth } from '../middlewares/Auth'

const UserRoutes = express.Router()

/**
 * All routes are entered with their respective verb methods
 * and the controller functions to be executed.
 */

UserRoutes.get('/users', auth.ensureAuth, UserController.getUsers)
UserRoutes.get('/users/total', auth.ensureAuth, UserController.getTotalUsers)
UserRoutes.get('/users/active', auth.ensureAuth, UserController.getActiveUsers)
UserRoutes.post('/user/login', UserController.loginUser)
UserRoutes.post('/user', auth.ensureAuth, UserController.createUser)
UserRoutes.post('/user/logout', auth.ensureAuth, UserController.logoutUser)
UserRoutes.get('/user/id/:id', auth.ensureAuth, UserController.getUserById)
UserRoutes.get('/user/:email', auth.ensureAuth, UserController.getUserByEmail)
UserRoutes.put('/user/:email', auth.ensureAuth, UserController.updateUserByEmail)
UserRoutes.delete('/user/:email', auth.ensureAuth, UserController.deleteUserByEmail)

export default UserRoutes
