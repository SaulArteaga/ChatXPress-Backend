import mongoose from 'mongoose'

import { WEB_CONFIG } from './constants/web.config'
import app from './app'

const urlMongo = 'mongodb://helpdev:123456@localhost:27017/'

mongoose
  .connect(urlMongo)
  .then(() => {
    console.log('El servidor se inicio')

    app.listen(WEB_CONFIG.PORT, () => {
      console.log('Servidor iniciado en el puerto 3000')
    })
  })
  .catch(() => {
    console.log('No se puede conectar con el servidor')
  })
