import {Test, TestingModule} from '@nestjs/testing';
import {PersonRecordsService} from './person-records.service';

describe('PersonRecordsService', () => {
  let service: PersonRecordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonRecordsService],
    }).compile();

    service = module.get<PersonRecordsService>(PersonRecordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
