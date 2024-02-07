import {Test, TestingModule} from '@nestjs/testing';
import {PersonRecordsController} from './person-records.controller';

describe('PersonRecordsController', () => {
  let controller: PersonRecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonRecordsController],
    }).compile();

    controller = module.get<PersonRecordsController>(PersonRecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
