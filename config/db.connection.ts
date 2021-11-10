import { Connection, createConnection, getConnection } from 'typeorm'
import connectionConfig from './ormconfig.local'

export const dbConnection = async (): Promise<Connection> => {
  try {
    return await getConnection()
  } catch (err) {
    return await createConnection(connectionConfig)
  }
}
