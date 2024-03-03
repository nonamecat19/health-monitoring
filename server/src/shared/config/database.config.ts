import {registerAs} from '@nestjs/config';

export default registerAs('database', () => ({
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_ROOT_PASSWORD,
  synchronize: process.env.NODE_ENV === 'development',
  entities: [`${__dirname}/../../modules/**/entities/*.entity{.ts,.js}`],
  migrations: [`${__dirname}/../../migrations/*{.ts,.js}`],
  migrationsTableName: 'migrations',
  ssl: process.env.DB_SSL,
}));
