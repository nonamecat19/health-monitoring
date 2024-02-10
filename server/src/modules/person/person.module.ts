import {Module} from '@nestjs/common';
import {PersonController} from './controllers';
import {PersonService} from './services';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Person} from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}
