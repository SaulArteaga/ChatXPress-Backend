// import mongoose from 'mongoose'

import { WEB_CONFIG } from './constants/web.config'
import app from './app'
import { connect } from './db/database'

// const urlMongo = 'mongodb://helpdev:123456@localhost:27017/'

// const urlMongo = 'mongodb+srv://admin2:adminadmin@prueba.jjuvtzw.mongodb.net/pruebadb?retryWrites=true&w=majority'

connect()
  .then(() => {
    console.log('El servidor se inicio')
  })
  .catch(() => {
    console.log('No se puede conectar con el servidor')
  })
app.listen(WEB_CONFIG.PORT, () => {
  console.log('Servidor iniciado en el puerto 3000')
})
