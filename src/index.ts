import { WEB_CONFIG } from './constants/web.config'
import { app, server } from './app'
import { connect } from './db/database'

/**
 * Create the connection to the database.
 */

connect()
  .then(() => {
    console.log('conexión exitosa a la base de datos')
  })
  .catch(() => {
    console.log('No se puede conectar con la base de datos')
  })

/**
 * We launch the application by making it
 * listen on the indicated port
 */

app.listen(WEB_CONFIG.PORT, () => {
  console.log('Servidor iniciado en el puerto 3000')
})

/**
 * We launch the application by making it
 * listen on the indicated port
 */
const PORT = 3001
server.listen(PORT, () => {
  console.log(`Servidor socket.io escuchando en puerto ${PORT}`)
})
