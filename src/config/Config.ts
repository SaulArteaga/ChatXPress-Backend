import { genSaltSync } from 'bcrypt'
/**
 * This is where the configuration constants are stored.
 */

const PORT = 3002
const PORT_SOCKET = 3001
const SECRET_KEY = 'adminadmin'
const SALT = genSaltSync(10)
const DATABASE_URL_CONNECTION = 'mongodb://admin:admin@localhost:27017/db_proyect?authSource=admin'

export const CONFIG = {
  PORT,
  PORT_SOCKET,
  SECRET_KEY,
  SALT,
  DATABASE_URL_CONNECTION,
}
