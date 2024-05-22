import { CONFIG } from './config/Config'
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

app.listen(CONFIG.PORT, () => {
  console.log(`Servidor iniciado en el puerto ${CONFIG.PORT}`)
})

/**
 * We launch the application by making it
 * listen on the indicated port
 */
server.listen(CONFIG.PORT_SOCKET, () => {
  console.log(`Servidor socket.io escuchando en puerto ${CONFIG.PORT_SOCKET}`)
})
