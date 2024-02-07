import {Test, TestingModule} from '@nestjs/testing';
import {RoomRecordsController} from './room-records.controller';

describe('RoomRecordsController', () => {
  let controller: RoomRecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomRecordsController],
    }).compile();

    controller = module.get<RoomRecordsController>(RoomRecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
