import { WEB_CONFIG } from './constants/web.config'
import app from './app'
import { connect } from './db/database'

/**
 * Create the connection to the database.
 */

connect()
  .then(() => {
    console.log('El servidor se inicio')
  })
  .catch(() => {
    console.log('No se puede conectar con el servidor')
  })

/**
 * We launch the application by making it
 * listen on the indicated port
 */

app.listen(WEB_CONFIG.PORT, () => {
  console.log('Servidor iniciado en el puerto 3000')
})
