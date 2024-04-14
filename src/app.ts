import express from 'express'
import { user } from './models/user'
import { roles } from './models/role'

const app = express()
app.use(express.json())

app.get('/hello', (_req, res) => {
  res.send('Muelto')
})

app.get('/users', async (_req, res) => {
  const users = await user.find()
  console.log(users)
  res.status(200).send(users)
})

app.get('/roles', async (_req, res) => {
  const roless = await roles.find()
  console.log(roless)
  res.status(200).send(roless)
})

export default app
