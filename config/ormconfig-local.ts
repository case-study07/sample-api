// module.exports = {
//   type: 'mysql',
//   host: 'mysql',
//   port: 3306,
//   username: 'root',
//   password: 'root',
//   database: 'case-study',
//   synchronize: false,
//   logging: false, // SQLをログに流すオプション
//   entities: ['src/entity/**/*.ts'],
//   migrations: ['src/migration/**/*.ts'],
//   subscribers: ['src/subscriber/**/*.ts'],
//   cli: {
//     entitiesDir: 'src/entity',
//     migrationsDir: 'src/migration',
//     subscribersDir: 'src/subscriber',
//   },
// }

import { ConnectionOptions } from 'typeorm'

const ormconfig: ConnectionOptions = {
  type: 'mysql',
  host: 'mysql',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'case-study',
  synchronize: false,
  logging: false, // SQLをログに流すオプション
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
