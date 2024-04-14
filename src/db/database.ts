import { connect as mongooseConnect, connection } from 'mongoose'

export const connect = async (): Promise<void> => {
  await mongooseConnect(
    // 'mongodb+srv://admin2:adminadmin@prueba.jjuvtzw.mongodb.net/pruebadb?retryWrites=true&w=majority',
    'mongodb://helpdev:123456@localhost:27017/db_proyect?authSource=admin',
  )
}

export const close = (): Promise<void> => connection.close()
