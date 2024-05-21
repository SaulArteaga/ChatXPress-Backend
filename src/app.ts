import express from 'express'
import UsersRoutes from './routes/users.routes'
import MessageRoutes from './routes/messages.routes'
import ChatRoutes from './routes/chats.routes'
import http from 'http'
import { Server, Socket } from 'socket.io'
import { ISockedRecieved } from './interfaces/ISockedRecieved'

const app = express()
const server = http.createServer(app)
/**
 * We create a server for the Socket
 */
export const io = new Server(server, {
  cors: {
    origin: '*',
  },
})

/**
 * We create the CORS configuration to use the api
 */
app.use(express.json())
app.use(function (_req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,POST,PUT,DELETE')
  next()
})

/**
 * We create a test endpoint to check
 * if the application works correctly.
 */

app.get('/hello', (_req, res) => {
  res.send('Muelto')
})

/**
 * We create a connection for the socket
 */
io.on('connection', (socket: Socket) => {
  socket.on('connect', () => {
    console.log('Cliente conectado')
  })

  /**
   * We create a conection for the socket to set up a room between two client sockets.
   */
  socket.on('join', (roomname: string) => {
    let split = roomname.split('--with--')
    let unic = [...new Set(split)].sort((a, b) => (a < b ? -1 : 1))
    let updateRoomName = `${unic[0]}--with--${unic[1]}`
    Array.from(socket.rooms)
      .filter((it) => it !== socket.id)
      .forEach((id) => {
        socket.leave(id)
      })
    socket.join(updateRoomName)
    console.log(socket.rooms)
  })

  /**
   * We create a connection for the socket to emit the message to the assigned room
   */
  socket.on('emitMessage', (data: ISockedRecieved) => {
    const { message } = data
    const room = Array.from(socket.rooms).filter((it) => it !== socket.id)[0]
    socket.to(room).emit('emitMessage', message)
  })

  /**
   * We create a connection for the socket to disconnect the sockets.
   */
  socket.on('disconnect', () => {
    socket.removeAllListeners()
  })
})

/**
 * We add the routes of the application we are creating
 */

app.use('/api/v1', UsersRoutes)
app.use('/api/v1', MessageRoutes)
app.use('/api/v1', ChatRoutes)

export { app, server }
