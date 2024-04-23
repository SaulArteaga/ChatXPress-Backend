import express from 'express'
import UsersRoutes from './routes/users.routes'

const app = express()
app.use(express.json())

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

export default app
