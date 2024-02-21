import {NestFactory} from '@nestjs/core';
import {AppModule} from './app/app.module';
import {ValidationPipe, VersioningType} from '@nestjs/common';
import {FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify';
import {ConfigService} from '@nestjs/config';
import {enableCors} from './app/appCors';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  const configService = app.get(ConfigService);

  enableCors(app);
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );
  app.use(morgan('tiny'));
  await app.listen(configService.getOrThrow<number>('app.port'));
}

bootstrap().then();
