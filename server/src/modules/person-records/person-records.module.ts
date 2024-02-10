import {Module} from '@nestjs/common';
import {PersonRecordsController} from './controllers';
import {PersonRecordsService} from './services';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PersonRecord} from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([PersonRecord])],
  controllers: [PersonRecordsController],
  providers: [PersonRecordsService],
})
export class PersonRecordsModule {}
