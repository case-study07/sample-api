import { ConnectionOptions } from 'typeorm'

const ormconfig: ConnectionOptions = {
  type: 'sqlite',
  database: "database.sqlite",
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