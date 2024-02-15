import {Module} from '@nestjs/common';
import {PersonController} from './controllers';
import {PersonService} from './services';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Person} from './entities';
import {MapperService} from '@shared/services';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  controllers: [PersonController],
  providers: [PersonService, MapperService],
})
export class PersonModule {}
