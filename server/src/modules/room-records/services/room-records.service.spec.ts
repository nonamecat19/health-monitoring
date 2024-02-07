import {Test, TestingModule} from '@nestjs/testing';
import {RoomRecordsService} from './room-records.service';

describe('RoomRecordsService', () => {
  let service: RoomRecordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoomRecordsService],
    }).compile();

    service = module.get<RoomRecordsService>(RoomRecordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
