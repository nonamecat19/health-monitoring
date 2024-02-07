import {Module} from '@nestjs/common';
import {PersonRecordsController} from './controllers/person-records.controller';
import {PersonRecordsService} from './services/person-records.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PersonRecord} from './entities/personRecord.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonRecord])],
  controllers: [PersonRecordsController],
  providers: [PersonRecordsService],
})
export class PersonRecordsModule {}
