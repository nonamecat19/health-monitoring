import {Test, TestingModule} from '@nestjs/testing';
import {MapperService} from './mapper.service';

describe('MapperServiceService', () => {
  let service: MapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MapperService],
    }).compile();

    service = module.get<MapperService>(MapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('map1', () => {
    const object = {id: 2};
    const config = {id: 'userId'};
    const result = service.map(object, config);
    expect(result).toStrictEqual({userId: 2});
  });

  it('mapArray1', () => {
    const array = [{id: 1}, {id: 2}];
    const config = {id: 'userId'};
    const result = service.mapArray(array, config);
    expect(result).toStrictEqual([{userId: 1}, {userId: 2}]);
  });

  it('mapNested1', () => {
    const object = {user: {id: 2}};
    const config = {'user.id': 'userId'};
    const result = service.map(object, config);
    expect(result).toStrictEqual({user: {userId: 2}});
  });

  it('mapNested2', () => {
    const object = {people: {user: {id: 2}}};
    const config = {'people.user.id': 'userId'};
    const result = service.map(object, config);
    expect(result).toStrictEqual({people: {user: {userId: 2}}});
  });
});
