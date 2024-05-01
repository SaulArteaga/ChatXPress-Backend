import express from 'express'
import UsersRoutes from './routes/users.routes'
import MessageRoutes from './routes/messages.routes'

const app = express()
app.use(express.json())
app.use(function (_req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
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
 * We add the routes of the application we are creating
 */

app.use('/api/v1', UsersRoutes)
app.use('/api/v1', MessageRoutes)

export default app
