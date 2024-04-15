import express from 'express'
import UsersRoutes from './routes/users.routes'
//import { user } from './models/user'
//import { roles } from './models/role'

const app = express()
app.use(express.json())

app.get('/hello', (_req, res) => {
  res.send('Muelto')
})

app.use('/api/v1', UsersRoutes)

// app.get('/roles', async (_req, res) => {
//   const roless = await roles.find()
//   console.log(roless)
//   res.status(200).send(roless)
// })

export default app
