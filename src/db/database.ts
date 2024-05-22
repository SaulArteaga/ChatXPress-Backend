import { connect as mongooseConnect, connection } from 'mongoose'
import { CONFIG } from '../config/Config'

/**
 * This function performs the connection to the database.
 * @returns a promise
 */

export const connect = async (): Promise<void> => {
  await mongooseConnect(CONFIG.DATABASE_URL_CONNECTION)
}

/**
 * This function closes the connection to the database.
 * @returns a promise
 */

export const close = (): Promise<void> => connection.close()
