import { ConnectionOptions } from 'typeorm'

// host
const host = process.env.DB_CONTAINER_NAME
  ? process.env.DB_CONTAINER_NAME
  : 'localhost'
// port
const port = process.env.DB_CONTAINER_PORT
  ? parseInt(process.env.DB_CONTAINER_PORT)
  : 3306
// username
const username = process.env.DB_USERNAME ? process.env.DB_USERNAME : 'root'
const password = process.env.DB_PASSWORD ? process.env.DB_PASSWORD : 'root'
const database = process.env.DB_DATABASE
  ? process.env.DB_DATABASE
  : 'case-study'

const ormconfig: ConnectionOptions = {
  type: 'mysql',
  host,
  port,
  username,
  password,
  database,
  synchronize: true,
  logging: true, // SQLをログに流すオプション
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
}

export default ormconfig
