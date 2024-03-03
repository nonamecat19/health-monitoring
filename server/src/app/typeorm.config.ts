import {config} from 'dotenv';
import {ConfigService} from '@nestjs/config';
import {DataSource} from 'typeorm';

config();

const configService = new ConfigService();

export default new DataSource({
  type: configService.get<any>('DB_TYPE'),
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  database: configService.get<string>('DB_DATABASE'),
  username: configService.get<string>('DB_USERNAME'),
  password: configService.get<string>('DB_ROOT_PASSWORD'),
  synchronize: configService.get<string>('NODE_ENV') === 'development',
  entities: [`${__dirname}/../modules/**/entities/*.entity{.ts,.js}`],
  migrations: [`${__dirname}/../migrations/*{.ts,.js}`],
  migrationsTableName: 'migrations',
  ssl: configService.get<boolean>('DB_SSL'),
});
